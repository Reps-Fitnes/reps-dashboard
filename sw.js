// Cache the public sign-in shell only. Never intercept or cache the private API.
const CACHE='reps-control-room-shell-v2';
const ROOT=new URL('./',self.location.href).pathname;
const MANIFEST=new URL('./manifest.webmanifest',self.location.href).pathname;
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([ROOT,MANIFEST])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('reps-control-room-shell-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 const isShell=url.pathname===ROOT||url.pathname===ROOT+'index.html';
 if(isShell&&request.mode==='navigate')event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(ROOT,copy)))}return response}).catch(async()=>await caches.match(ROOT)||new Response('Connect to the internet to open Reps Control Room.',{status:503,headers:{'Content-Type':'text/plain'}})));
 else if(url.pathname===MANIFEST)event.respondWith(fetch(request).catch(()=>caches.match(MANIFEST)));
});
