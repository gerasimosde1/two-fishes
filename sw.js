// Two Fishes service worker: app shell works offline, updates arrive on next launch.
const VERSION = 'tf-v31';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './app.js', './chiron.js', './i18n/en.js', './i18n/en-deep.js', './i18n/el.js', './i18n/it.js'];

self.addEventListener('install', e => {
  // Our own files must all cache; the outside libraries and fonts are cached best-effort so the app also starts offline.
  const OUTSIDE = ['https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/astronomy.browser.min.js', 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=IM+Fell+English+SC&family=IM+Fell+English:ital@0;1&family=Courier+Prime:wght@400;700&family=Noto+Sans+Symbols:wght@400;500&display=swap'];
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL).then(() => Promise.all(OUTSIDE.map(u => fetch(new Request(u, { mode: u.includes('jsdelivr') ? 'cors' : 'no-cors' })).then(res => c.put(u, res)).catch(() => {}))))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Our own pages and scripts: network first so new versions show up, cache as fallback offline.
  if (req.mode === 'navigate' || (url.origin === location.origin && /\.(html|js|webmanifest)$|\/$/.test(url.pathname))) {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  // Everything else (fonts, astronomy library, icons): cache first.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
