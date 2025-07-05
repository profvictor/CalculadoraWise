const CACHE_NAME = 'conversor-wise-v1.0.0';
const BASE_URL = '/CalculadoraWise/';
const urlsToCache = [
  BASE_URL,
  BASE_URL + 'index.html',
  BASE_URL + 'manifest.json',
  BASE_URL + 'icons/icon-72x72.png',
  BASE_URL + 'icons/icon-96x96.png',
  BASE_URL + 'icons/icon-128x128.png',
  BASE_URL + 'icons/icon-144x144.png',
  BASE_URL + 'icons/icon-152x152.png',
  BASE_URL + 'icons/icon-192x192.png',
  BASE_URL + 'icons/icon-384x384.png',
  BASE_URL + 'icons/icon-512x512.png',
  BASE_URL + 'icons/logo.png'
];

// Instalar service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se encontrado
        if (response) {
          return response;
        }
        
        // Se não estiver no cache, busca da rede
        return fetch(event.request)
          .then(response => {
            // Não cacheia requisições que não são GET
            if (!response || response.status !== 200 || response.type !== 'basic' || event.request.method !== 'GET') {
              return response;
            }
            
            // Clona a resposta para cache
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Se offline e não encontrado no cache, retorna página offline
            if (event.request.destination === 'document') {
              return caches.match(BASE_URL + 'index.html');
            }
          });
      })
  );
});

// Ativar service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 