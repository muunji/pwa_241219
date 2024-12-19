self.addEventListener('install',(event)=>{
  console.log('installing');
  event.waitUntil(
    caches.open('my-cache').then((cache)=>{
      return cache.addAll([
        '/',
        '/index.html',
        '/index.js'
      ]);
    })
  );
});

self.addEventListener('active',(event)=>{
  console.log('activated');
});

self.addEventListener('fetch',(event)=>{
  event.respondWith(
    caches.match(event.request).then((cachedResponse)=>{
      return cachedResponse || fetch(event.request);
    })
  );
});

self.addEventListener('push',(event)=>{
  const options = {
    body: event.data.text()
  };
  event.waitUntil(
    self.registration.showNotification('New Notification',options)
  );
});