'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7e61e8891e4e5e697e68b57f216151ce",
"index.html": "177790ef76e4c578ea7863a9b5f429f6",
"/": "177790ef76e4c578ea7863a9b5f429f6",
"main.dart.js": "4970535ee3df2cfda4962f57304befaa",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8bd49d9411dcc23e64afab31c663f640",
".git/config": "158c12e717475d5e4fd2c86a367315cf",
".git/objects/3e/d58742cc5bf8395e97f546de44ead1465d85a4": "96355363022334abbf5ce507acf2afb0",
".git/objects/04/92d8cdd3ddd5052552644b16ff83788beb6b5c": "9eb584191a15b40f99cbaf051b3195fa",
".git/objects/04/2e079d85937fd56c784845ba1be6f1d3a03bda": "fa9ad4c9e4604c6480909ad90d637bfe",
".git/objects/51/07ca5a87edf40bf0b13715d35458d579eeaaf2": "8b4b2bef53ab0073292e26380761ae4c",
".git/objects/3d/4524488c6a81e72af3562e6e08cc7a7455dbb2": "e7b5f0b162ec48653e9cb9b61ef15b27",
".git/objects/a3/b916a6b544b42e97cfef1409a6d3f9c169bdfd": "c924888d93fa15179cd586399c4452af",
".git/objects/bb/1136b5c2c22856f8e4d04c33c394b4c757b7df": "bdd51c281c4ded0665045e062d1c4deb",
".git/objects/d0/7025e0c50fe0b88be87bad377c150ffb92d11a": "1c7bdddda2d0fb939067a63433cca71d",
".git/objects/bc/948205d8e060d7dd20f06a185660134b75c82b": "6a2ff23183d76acb5506ce37ba630018",
".git/objects/ec/43e9c1eab2ae69689554427aa6db7721080d56": "99d36409b77de87a311537252f3eeccb",
".git/objects/pack/pack-b17463380c74d702e680f4524695b44062026d39.idx": "2c50b40489a768020a24e5b8463c34e2",
".git/objects/pack/pack-b17463380c74d702e680f4524695b44062026d39.pack": "6d5ead9134f6a1378f31fd84ab29f123",
".git/objects/89/d88aae6d18841d50c117caa07fcc5da4fa85c0": "6361b9650fe839a6502c2acc72ebeb12",
".git/objects/1a/316d7c1cc574a8659ea47af2ca2d0f677a6aee": "0b49c9b1f665630c27e2cc0d45bd8542",
".git/objects/17/87aee08faefb497bcf1569d5e911fcfdc9ab38": "9b4d78edbc133a3bb38aa91e858f6dac",
".git/objects/01/693b53591888339d4fe4fe00de267e74e75c39": "50d6819e8846656ff31731d017f866e1",
".git/objects/64/102b686a0906ba13f42ba43bd7037c710bed13": "6f8789fedbf8484f24392c08231f7aa3",
".git/objects/4f/a61cb767aa251d2fb3280eaacaa594f43eaf67": "170810a894001e59ad63087d79fffad8",
".git/objects/76/5e7bf467ac0bf6ba05788068e822f2de968c81": "a1db9bbb8ca84e242dc8b2d6c65da586",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "105d68ca9a71c342ec4c48f5575b4e56",
".git/logs/refs/heads/master": "14a04755d2d5c88585dc84d0b9b349c3",
".git/logs/refs/remotes/host/master2": "7bfee77368b8d354f02a5d7e1ee8635c",
".git/logs/refs/remotes/host/master": "3e932a681bb14cab34343c236fc5beb6",
".git/refs/heads/master": "bfffcd3d572fe4d82193b88bb2e81cdc",
".git/refs/remotes/host/master2": "0ee031e088c5e90d03de9c35bca6d685",
".git/refs/remotes/host/master": "bfffcd3d572fe4d82193b88bb2e81cdc",
".git/index": "2064781e0c4035c72c87f01527b118f2",
".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
".git/FETCH_HEAD": "a15fa9a1514531d7b32f6c6a43d533cc",
".git/sourcetreeconfig": "7c1533d811c6cb7f6d9bea9b34553008",
"assets/AssetManifest.json": "8045c44dbdf72fe3fec1e46b2dd1ae18",
"assets/NOTICES": "2bc2e95e3c0aa8653a4530a225a1d6af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/ppvc_my.json": "2d6b5aea51f6f34eb703eb31d3e51298",
"assets/assets/img5.png": "2cddd4812d97f3de44590f493fdabb31",
"assets/assets/img4.png": "1da67d9f60484fbc602efacce77abbf0",
"assets/assets/img6.png": "7f8d86bbaa20b089e3edc84ddfc3ae28",
"assets/assets/img3.png": "00aaabf770f316eb8dbc466a475bca5e",
"assets/assets/img2.png": "522606616cb0398a8748fe1ced6b8830",
"assets/assets/img1.png": "2145adcc26105007147607b671b37a96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
