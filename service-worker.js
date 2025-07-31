// service-worker.js
const CACHE_NAME = 'tjpr-ai-cache-v1';
const ASSETS_TO_CACHE = [
'/',
'/index.html',
'/styles.css',
'/scripts.js',
'/icons/icon-192x192.png',
'/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(ASSETS_TO_CACHE))
);
});

self.addEventListener('activate', event => {
event.waitUntil(
caches.keys().then(keys => Promise.all(
keys.filter(key => key !== CACHE_NAME)
.map(key => caches.delete(key))
))
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});

