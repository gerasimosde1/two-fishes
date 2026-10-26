// Astro Pisces service worker: app shell works offline, updates arrive on next launch.
const VERSION = 'tf-v42';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './app.js', './chiron.js', './i18n/en.js', './i18n/en-deep.js', './i18n/en-match.js', './i18n/el.js', './i18n/it.js', './lib/astronomy.browser.min.js', './fonts/fonts.css',
  './fonts/alegreya-greek-0.woff2', './fonts/alegreya-greek-3.woff2', './fonts/alegreya-latin-2.woff2', './fonts/alegreya-latin-5.woff2', './fonts/alegreya-latin-ext-1.woff2', './fonts/alegreya-latin-ext-4.woff2', './fonts/alegreya-sans-greek-12.woff2', './fonts/alegreya-sans-greek-6.woff2', './fonts/alegreya-sans-greek-9.woff2', './fonts/alegreya-sans-latin-11.woff2', './fonts/alegreya-sans-latin-14.woff2', './fonts/alegreya-sans-latin-8.woff2', './fonts/alegreya-sans-latin-ext-10.woff2', './fonts/alegreya-sans-latin-ext-13.woff2', './fonts/alegreya-sans-latin-ext-7.woff2', './fonts/cormorant-garamond-latin-16.woff2', './fonts/cormorant-garamond-latin-18.woff2', './fonts/cormorant-garamond-latin-ext-15.woff2', './fonts/cormorant-garamond-latin-ext-17.woff2', './fonts/noto-sans-symbols-latin-21.woff2', './fonts/noto-sans-symbols-latin-ext-20.woff2', './fonts/noto-sans-symbols-symbols-19.woff2', './fonts/noto-serif-display-greek-22.woff2', './fonts/noto-serif-display-greek-25.woff2', './fonts/noto-serif-display-latin-24.woff2', './fonts/noto-serif-display-latin-27.woff2', './fonts/noto-serif-display-latin-ext-23.woff2', './fonts/noto-serif-display-latin-ext-26.woff2', './fonts/pinyon-script-latin-28.woff2'];

self.addEventListener('install', e => {
  // Everything is bundled (Astronomy Engine in lib/, fonts in fonts/), so the whole app starts offline.
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
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
  // 'no-cache' skips the browser's 10-minute copy, so a new page never runs with an old app.js.
  if (req.mode === 'navigate' || (url.origin === location.origin && /\.(html|js|webmanifest)$|\/$/.test(url.pathname))) {
    const fresh = req.mode === 'navigate' ? fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : fetch(req, { cache: 'no-cache' });
    e.respondWith(fresh.then(res => {
      const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  // Everything else (fonts, icons): cache first.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
