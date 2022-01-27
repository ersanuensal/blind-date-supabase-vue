console.log('Hello from service-worker.js');

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-cache-v1')
      .then(function (cache) {
        return cache.addAll(['/', '/styles/main.css', '/scripts/main.js']);
      })
  );
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