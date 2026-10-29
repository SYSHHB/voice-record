/* Offline support for Meeting Voice to Report. Bump VERSION when you publish an update. */
var VERSION = "mvr-v2", CDN = "mvr-cdn-v1";
var FILES = ["./", "./index.html", "./whisper-worker.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== VERSION && k !== CDN; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  var r = e.request, u = new URL(r.url);
  if(r.method !== "GET") return;
  if(u.origin === location.origin){
    e.respondWith(fetch(r).then(function(res){
      var copy = res.clone(); caches.open(VERSION).then(function(c){ c.put(r, copy); }); return res;
    }).catch(function(){ return caches.match(r).then(function(m){ return m || caches.match("./index.html"); }); }));
    return;
  }
  /* speech engine files from the CDN: keep a copy so they work offline. Model files are kept by the engine itself. */
  if(u.hostname === "cdn.jsdelivr.net"){
    e.respondWith(caches.open(CDN).then(function(c){
      return c.match(r).then(function(m){
        return m || fetch(r).then(function(res){ if(res && (res.ok || res.type === "opaque")) c.put(r, res.clone()); return res; });
      });
    }));
  }
});
