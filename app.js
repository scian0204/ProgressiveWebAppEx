// Install the service worker
self.addEventListener('install', function(event) {
    console.log('Service worker installed.');
});

// Activate the service worker
self.addEventListener('activate', function(event) {
    console.log('Service worker activated.');
});

// Fetch event listener
self.addEventListener('fetch', function(event) {
    console.log('Fetch event:', event.request.url);
    event.respondWith(fetch(event.request));
});
