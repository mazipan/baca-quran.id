const deleteOldCaches = async () => {
	caches.keys().then(function (names) {
		for (let name of names) {
			caches.delete(name);
		}
	});
};

self.addEventListener('activate', (event) => {
	event.waitUntil(deleteOldCaches());
});

// const addResourcesToCache = async (resources) => {
//   const cache = await caches.open("v1");
//   await cache.addAll(resources);
// };

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     addResourcesToCache([
//       "/",
//       "/index.html",
//       "/style.css",
//       "/app.js",
//       "/image-list.js",
//       "/star-wars-logo.jpg",
//       "/gallery/bountyHunters.jpg",
//       "/gallery/myLittleVader.jpg",
//       "/gallery/snowTroopers.jpg",
//     ])
//   );
// });

// -- CACHE FIRST

// const putInCache = async (request, response) => {
//   const cache = await caches.open("v1");
//   await cache.put(request, response);
// };

// const cacheFirst = async (request) => {
//   const responseFromCache = await caches.match(request);
//   if (responseFromCache) {
//     return responseFromCache;
//   }
//   const responseFromNetwork = await fetch(request);
//   putInCache(request, responseFromNetwork.clone());
//   return responseFromNetwork;
// };

// self.addEventListener("fetch", (event) => {
//   event.respondWith(cacheFirst(event.request));
// });
