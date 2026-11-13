/* Microsoft sign-in (OAuth 2.0 authorization code + PKCE) for a single-page app. No libraries. */
(function(){
"use strict";
var C = window.MVR_CONFIG || {};
var SK = "mvr:auth:v1", PK = "mvr:pkce:v1";
var SCOPE = "openid profile offline_access User.Read Files.ReadWrite.All";
var T = null, refreshing = null;
function load(){ try{ T = JSON.parse(localStorage.getItem(SK) || "null"); }catch(_){ T = null; } }
function save(){ try{ if(T) localStorage.setItem(SK, JSON.stringify(T)); else localStorage.removeItem(SK); }catch(_){} }
load();
function base(){ return "https://login.microsoftonline.com/" + encodeURIComponent(C.tenantId); }
function redirectUri(){ return location.origin + location.pathname.replace(/index\.html$/, ""); }
function b64u(bytes){ var s = ""; for(var i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]); return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); }
function rnd(n){ var a = new Uint8Array(n); crypto.getRandomValues(a); return b64u(a); }
async function sha256(s){ return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s))); }
function parseJwt(t){ var p = t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"); while(p.length % 4) p += "="; return JSON.parse(decodeURIComponent(escape(atob(p)))); }
function loginRequired(){ var e = new Error("Please sign in again."); e.code = "login_required"; return e; }

async function login(){
  var verifier = rnd(48), state = rnd(16), nonce = rnd(16);
  var challenge = b64u(await sha256(verifier));
  sessionStorage.setItem(PK, JSON.stringify({v: verifier, s: state, n: nonce, r: redirectUri()}));
  var q = {client_id: C.clientId, response_type: "code", redirect_uri: redirectUri(), response_mode: "query",
           scope: SCOPE, state: state, nonce: nonce, code_challenge: challenge, code_challenge_method: "S256", prompt: "select_account"};
  location.assign(base() + "/oauth2/v2.0/authorize?" + Object.keys(q).map(function(k){ return k + "=" + encodeURIComponent(q[k]); }).join("&"));
}
async function tokenReq(body){
  var r = await fetch(base() + "/oauth2/v2.0/token", {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: body});
  var j = await r.json().catch(function(){ return {}; });
  if(!r.ok){ var e = new Error(j.error_description ? j.error_description.split("\r")[0] : (j.error || "Sign-in failed")); e.code = j.error; throw e; }
  return j;
}
function setTokens(tk, claims){
  T = {at: tk.access_token, rt: tk.refresh_token || (T && T.rt) || null, exp: Date.now() + Math.max(60, (tk.expires_in || 3600) - 120) * 1000, c: claims || (T && T.c) || null};
  save();
}
async function handleRedirect(){
  var p = new URLSearchParams(location.search);
  if(!p.has("code") && !p.has("error")) return false;
  var saved = null; try{ saved = JSON.parse(sessionStorage.getItem(PK) || "null"); }catch(_){}
  sessionStorage.removeItem(PK);
  history.replaceState(null, "", location.pathname);
  if(p.has("error")) throw new Error((p.get("error_description") || p.get("error")).split("\n")[0]);
  if(!saved || saved.s !== p.get("state")) throw new Error("The sign-in response did not match. Please try again.");
  var tk = await tokenReq(new URLSearchParams({client_id: C.clientId, grant_type: "authorization_code", code: p.get("code"),
    redirect_uri: saved.r, code_verifier: saved.v, scope: SCOPE}));
  var claims = parseJwt(tk.id_token);
  if(claims.nonce !== saved.n) throw new Error("Sign-in check failed. Please try again.");
  if(/^[0-9a-f-]{36}$/i.test(C.tenantId) && claims.tid !== C.tenantId) throw new Error("This account belongs to a different organisation.");
  setTokens(tk, claims);
  return true;
}
async function token(){
  if(!T || !T.rt) throw loginRequired();
  if(Date.now() < T.exp) return T.at;
  if(!navigator.onLine){ var o = new Error("You are offline."); o.code = "offline"; throw o; }
  if(!refreshing){
    refreshing = (async function(){
      try{
        var tk = await tokenReq(new URLSearchParams({client_id: C.clientId, grant_type: "refresh_token", refresh_token: T.rt, scope: SCOPE}));
        setTokens(tk, tk.id_token ? parseJwt(tk.id_token) : null);
      }catch(e){
        if(e.code === "invalid_grant" || e.code === "interaction_required" || e.code === "login_required"){ T = null; save(); throw loginRequired(); }
        throw e;
      }
    })().finally(function(){ refreshing = null; });
  }
  await refreshing;
  return T.at;
}
function user(){
  if(!T || !T.c) return null;
  var c = T.c, alts = [c.preferred_username, c.email, c.upn].filter(Boolean).map(function(s){ return String(s).toLowerCase(); });
  return {email: (alts[0] || ""), alts: alts, name: c.name || alts[0] || "", oid: c.oid, tid: c.tid};
}
function signedIn(){ return !!(T && T.rt); }
function invalidate(){ if(T){ T.exp = 0; } }
function logout(){
  T = null; save(); try{ sessionStorage.clear(); localStorage.removeItem("mvr:sess:v1"); }catch(_){}
  if(navigator.onLine && C.tenantId) location.assign(base() + "/oauth2/v2.0/logout?post_logout_redirect_uri=" + encodeURIComponent(redirectUri()));
  else location.reload();
}
window.MVR_AUTH = {login: login, handleRedirect: handleRedirect, token: token, user: user, signedIn: signedIn, invalidate: invalidate, logout: logout, redirectUri: redirectUri};
})();
