/* OneDrive storage through Microsoft Graph: users, meetings, audio, audit log. */
(function(){
"use strict";
var C = window.MVR_CONFIG || {}, A = window.MVR_AUTH, G = "https://graph.microsoft.com/v1.0";
var layoutDone = false;
function fail(msg, status){ var e = new Error(msg); e.status = status; return e; }
async function errOf(r){ var m = "Error " + r.status; try{ var j = await r.json(); if(j && j.error) m = j.error.message || j.error.code || m; }catch(_){} return fail(m, r.status); }
async function call(path, o){
  o = o || {};
  var tok = await A.token();
  var h = Object.assign({Authorization: "Bearer " + tok}, o.headers || {});
  var r = await fetch(path.indexOf("http") === 0 ? path : G + path, {method: o.method || "GET", headers: h, body: o.body});
  if(r.status === 401 && !o.retried){ A.invalidate(); return call(path, Object.assign({}, o, {retried: true})); }
  return r;
}
async function json(path, o){ var r = await call(path, o); if(!r.ok) throw await errOf(r); return r.json(); }
function ready(){ if(!C.driveId || !C.folderId) throw fail("The OneDrive data folder is not set up yet.", 0); }
function P(path){ ready(); return "/drives/" + C.driveId + "/items/" + C.folderId + ":/" + path.split("/").map(encodeURIComponent).join("/") + ":"; }
function F(){ ready(); return "/drives/" + C.driveId + "/items/" + C.folderId; }

async function readJSON(path){
  var m = await call(P(path) + "?$select=id,eTag");
  if(m.status === 404) return null;
  if(!m.ok) throw await errOf(m);
  var meta = await m.json();
  var r = await call(P(path) + "/content");
  if(r.status === 404) return null;
  if(!r.ok) throw await errOf(r);
  var txt = await r.text(), data = null;
  if(txt.trim()){ try{ data = JSON.parse(txt); }catch(_){ throw fail("The file " + path + " is damaged.", 0); } }
  return {data: data, etag: meta.eTag, id: meta.id};
}
async function writeText(path, body, o){
  o = o || {};
  var h = {"Content-Type": o.type || "application/json"};
  if(o.etag) h["If-Match"] = o.etag;
  var r = await call(P(path) + "/content?@microsoft.graph.conflictBehavior=" + (o.create ? "fail" : "replace"), {method: "PUT", headers: h, body: body});
  if(r.status === 412 || r.status === 409) throw fail("conflict", r.status);
  if(!r.ok) throw await errOf(r);
  return r.json();
}
async function remove(path){ var r = await call(P(path), {method: "DELETE"}); if(!r.ok && r.status !== 404) throw await errOf(r); }
async function ensureFolder(name){
  var r = await call(F() + "/children", {method: "POST", headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: name, folder: {}, "@microsoft.graph.conflictBehavior": "fail"})});
  if(r.ok || r.status === 409) return;
  throw await errOf(r);
}
async function ensureLayout(){
  if(layoutDone) return;
  await ensureFolder("meetings"); await ensureFolder("audio"); await ensureFolder("audit");
  layoutDone = true;
}

/* ---- users ---- */
async function loadUsers(){ var r = await readJSON("users.json"); return r ? r : {data: null, etag: null}; }
async function saveUsers(mutator){
  for(var i = 0; i < 4; i++){
    var r = await readJSON("users.json");
    var data = (r && r.data && r.data.users) ? r.data : {version: 1, users: []};
    var next = mutator(JSON.parse(JSON.stringify(data)));
    if(next === false) return data;
    try{ await writeText("users.json", JSON.stringify(next, null, 2), {etag: r && r.etag, create: !r}); return next; }
    catch(e){ if(e.status !== 412 && e.status !== 409) throw e; }
  }
  throw new Error("Could not save because someone else changed the user list at the same time. Try again.");
}
async function shareFolder(email, write){
  var r = await call(F() + "/invite", {method: "POST", headers: {"Content-Type": "application/json"},
    body: JSON.stringify({requireSignIn: true, sendInvitation: false, roles: [write ? "write" : "read"], recipients: [{email: email}]})});
  if(!r.ok) throw await errOf(r);
}
async function unshareFolder(email){
  var j = await json(F() + "/permissions");
  var hit = (j.value || []).filter(function(p){
    var ids = [].concat(p.grantedToV2 ? [p.grantedToV2] : [], p.grantedToIdentitiesV2 || []);
    return ids.some(function(g){ return g.user && String(g.user.email || "").toLowerCase() === email; });
  });
  for(var i = 0; i < hit.length; i++){
    var r = await call(F() + "/permissions/" + hit[i].id, {method: "DELETE"});
    if(!r.ok && r.status !== 404) throw await errOf(r);
  }
  return hit.length;
}

/* ---- meetings ---- */
function strip(o){ var c = {}; Object.keys(o).forEach(function(k){ if(k.charAt(0) !== "_") c[k] = o[k]; }); return c; }
async function listMeetings(){
  var out = [], url = P("meetings") + "/children?$select=id,name,eTag&$top=200";
  while(url){
    var j = await json(url);
    (j.value || []).forEach(function(it){ if(/\.json$/.test(it.name)) out.push({id: it.name.replace(/\.json$/, ""), etag: it.eTag}); });
    url = j["@odata.nextLink"] || null;
  }
  return out;
}
async function statMeeting(id){
  var r = await call(P("meetings/" + id + ".json") + "?$select=eTag");
  if(r.status === 404) return null;
  if(!r.ok) throw await errOf(r);
  return {etag: (await r.json()).eTag};
}
async function getMeeting(id){ return readJSON("meetings/" + id + ".json"); }
async function putMeeting(rec, etag){
  var j = await writeText("meetings/" + rec.id + ".json", JSON.stringify(strip(rec)), {etag: etag || null});
  return {etag: j.eTag};
}
async function deleteMeeting(id){ await remove("meetings/" + id + ".json"); }
async function uploadAudio(name, blob){
  await ensureLayout();
  var r = await call(P("audio/" + name) + "/content?@microsoft.graph.conflictBehavior=rename", {method: "PUT", headers: {"Content-Type": blob.type || "application/octet-stream"}, body: blob});
  if(!r.ok) throw await errOf(r);
  var j = await r.json(); return {name: j.name, webUrl: j.webUrl};
}

/* ---- audit log ---- */
var QK = "mvr:auditq:v1", flushing = false;
function qRead(){ try{ return JSON.parse(localStorage.getItem(QK) || "[]"); }catch(_){ return []; } }
function qWrite(a){ try{ localStorage.setItem(QK, JSON.stringify(a)); }catch(_){} }
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
async function appendDay(day, evs){
  await ensureLayout();
  for(var i = 0; i < 5; i++){
    var r = await readJSON("audit/" + day + ".json");
    var data = (r && r.data && r.data.events) ? r.data : {events: []};
    var have = {}; data.events.forEach(function(e){ have[e.id] = 1; });
    var add = evs.filter(function(e){ return !have[e.id]; });
    if(!add.length) return;
    data.events = data.events.concat(add);
    try{ await writeText("audit/" + day + ".json", JSON.stringify(data), {etag: r && r.etag, create: !r}); return; }
    catch(e){ if(e.status !== 412 && e.status !== 409) throw e; }
  }
  throw new Error("busy");
}
var Audit = {
  log: function(action, target, detail){
    var u = A.user() || {};
    qWrite(qRead().concat([{id: uid(), ts: new Date().toISOString(), email: u.email || "", name: u.name || "", action: action, target: target || "", detail: detail || ""}]));
    if(navigator.onLine) setTimeout(Audit.flush, 800);
  },
  flush: async function(){
    if(flushing || !navigator.onLine || !A.signedIn() || !C.folderId) return;
    flushing = true;
    try{
      var q = qRead(); if(!q.length) return;
      var byDay = {}; q.forEach(function(e){ var d = e.ts.slice(0, 10); (byDay[d] = byDay[d] || []).push(e); });
      for(var d in byDay){
        await appendDay(d, byDay[d]);
        var done = {}; byDay[d].forEach(function(e){ done[e.id] = 1; });
        qWrite(qRead().filter(function(e){ return !done[e.id]; }));
      }
    }catch(e){ if(global.DEBUG) console.error("flush error:", e.message); }
    finally{ flushing = false; }
  },
  clear: function(){ qWrite([]); }
};
async function listAuditDays(){
  var out = [], url = P("audit") + "/children?$select=name&$top=200";
  while(url){
    var j = await json(url);
    (j.value || []).forEach(function(it){ var m = it.name.match(/^(\d{4}-\d{2}-\d{2})\.json$/); if(m) out.push(m[1]); });
    url = j["@odata.nextLink"] || null;
  }
  return out.sort().reverse();
}
async function readAuditDay(day){ var r = await readJSON("audit/" + day + ".json"); return (r && r.data && r.data.events) || []; }

/* ---- first-time setup (run by the OneDrive owner) and diagnostics ---- */
async function setupOwnerFolder(){
  var name = C.folderName || "MeetingReportData";
  var drive = await json("/me/drive?$select=id");
  var r = await call("/me/drive/root/children", {method: "POST", headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: name, folder: {}, "@microsoft.graph.conflictBehavior": "fail"})});
  var item;
  if(r.status === 409) item = await json("/me/drive/root:/" + encodeURIComponent(name) + "?$select=id,name");
  else if(r.ok) item = await r.json();
  else throw await errOf(r);
  return {driveId: drive.id, folderId: item.id, name: name};
}
async function selfTest(){
  var out = [];
  async function step(label, fn){
    try{ out.push({label: label, ok: true, detail: (await fn()) || ""}); return true; }
    catch(e){ out.push({label: label, ok: false, detail: (e && e.message) || String(e)}); return false; }
  }
  await step("Signed in as", async function(){ var u = A.user(); if(!u) throw new Error("not signed in"); return u.email; });
  await step("Microsoft Graph reachable", async function(){ var m = await json("/me?$select=displayName,userPrincipalName"); return m.displayName + " (" + m.userPrincipalName + ")"; });
  await step("OneDrive data folder found", async function(){ var f = await json(F() + "?$select=name,folder"); if(!f.folder) throw new Error("not a folder"); return f.name; });
  await step("Can write, read and delete in the folder", async function(){
    await writeText("_selftest.json", JSON.stringify({t: Date.now()}), {}); var r = await readJSON("_selftest.json"); if(!r) throw new Error("could not read back"); await remove("_selftest.json"); return "ok";
  });
  return out;
}
window.MVR_CLOUD = {loadUsers: loadUsers, saveUsers: saveUsers, shareFolder: shareFolder, unshareFolder: unshareFolder,
  ensureLayout: ensureLayout, listMeetings: listMeetings, statMeeting: statMeeting, getMeeting: getMeeting, putMeeting: putMeeting,
  deleteMeeting: deleteMeeting, uploadAudio: uploadAudio, listAuditDays: listAuditDays, readAuditDay: readAuditDay,
  setupOwnerFolder: setupOwnerFolder, selfTest: selfTest};
window.MVR_AUDIT = Audit;
})();
