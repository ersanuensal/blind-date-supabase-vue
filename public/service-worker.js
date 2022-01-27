console.log('Hello from service-worker.js');

const KEY = 'key';

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'CACHE_URLS') {
        event.waitUntil(
            caches.open(KEY)
                .then( (cache) => {
                    return cache.addAll(event.data.payload);
                })
        );
    }
});

  function isSuccessful(response) {
    return response &&
      response.status === 200 &&
      response.type === 'basic';
  }
  
  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response; // Cache hit
          }
  
          return fetch(event.request.clone())
            .then(function (response) {
              if (!isSuccessful(response)) {
                return response;
              }
  
              caches.open(CACHE_NAME)
                .then(function (cache) {
                  cache.put(event.request, response.clone());
                });
  
              return response;
            }
          );
        })
      );
  });