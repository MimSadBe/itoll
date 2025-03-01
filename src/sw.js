import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

precacheAndRoute(self.__WB_MANIFEST);


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('offline-fallbacks').then((cache) => {
      return cache.add('/offline').catch(err => console.log('Failed to cache offline page', err));
    })
  );
});


registerRoute(
  ({ request }) => request.mode === 'navigate',
  async (options) => {
    try { 
      const response = await fetch(options.request);
      const cache = await caches.open('pages');
      await cache.put(options.request, response.clone());
      return response;
    } catch (error) {
      const url = new URL(options.request.url);
      if (url.pathname.startsWith('/product/')) {
        const cachedResponse = await caches.match(options.request);
        if (cachedResponse) return cachedResponse;
      }
      
      const fallbackResponse = await caches.match('/offline');
      if (fallbackResponse) {
        return fallbackResponse;
      } 
      
      return new Response('You are offline. Please check your connection.', {
        status: 503,
        headers: { 'Content-Type': 'text/html' },
      });
    }
  }
);


registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: 'assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24,
      }),
    ],
  })
);

registerRoute(
  ({ url }) => url.pathname.match(/\/api\/products\/\d+$/),
  new NetworkFirst({
    cacheName: 'product-api-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 7,
      }),
    ],
  })
);