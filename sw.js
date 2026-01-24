const CACHE_NAME = 'tristan-carter-v1'
const ASSETS_TO_CACHE = ['/', '/index.html']

// Cache on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE)
    }),
  )
  self.skipWaiting()
})

// Activate and clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
  self.clients.claim()
})

// Network first for assets, fallback to cache
self.addEventListener('fetch', (event) => {
  const { request } = event

  // Cache images aggressively
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          return (
            response ||
            fetch(request)
              .then((fetchResponse) => {
                cache.put(request, fetchResponse.clone())
                return fetchResponse
              })
              .catch(() => {
                // Return cached image if offline
                return cache.match(request)
              })
          )
        })
      }),
    )
    return
  }

  // Network first for other assets
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        return caches.match(request)
      }),
  )
})
