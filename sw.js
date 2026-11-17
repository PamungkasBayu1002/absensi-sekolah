const CACHE_NAME = 'absensi-wajah-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js',
    'https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js',
    'https://justadudewhohacks.github.io/face-api.js/models/ssd_mobilenetv1_model-weights_manifest.json',
    'https://justadudewhohacks.github.io/face-api.js/models/ssd_mobilenetv1_model-shard1',
    'https://justadudewhohacks.github.io/face-api.js/models/ssd_mobilenetv1_model-shard2',
    'https://justadudewhohacks.github.io/face-api.js/models/face_landmark_68_model-weights_manifest.json',
    'https://justadudewhohacks.github.io/face-api.js/models/face_landmark_68_model-shard1',
    'https://justadudewhohacks.github.io/face-api.js/models/face_recognition_model-weights_manifest.json',
    'https://justadudewhohacks.github.io/face-api.js/models/face_recognition_model-shard1',
    'https://justadudewhohacks.github.io/face-api.js/models/face_recognition_model-shard2'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});