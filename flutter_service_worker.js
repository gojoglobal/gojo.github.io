'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7e61e8891e4e5e697e68b57f216151ce",
"index.html": "a12c23e4f3ab87c10578e2e682a3e109",
"/": "a12c23e4f3ab87c10578e2e682a3e109",
"main.dart.js": "c498e9ff31cff219c3d237251a69067c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8bd49d9411dcc23e64afab31c663f640",
".git/config": "158c12e717475d5e4fd2c86a367315cf",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/93/f38d09080618c28db84abf3f523ff5c8619c47": "45fce714f732db7e107d6b91f61b05fd",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/94/5a194e00f9b5aea0494d2d461a17c9b006b6ba": "49cb08fc824b3d50d38e88f19b116750",
".git/objects/5a/f70dcf67286afc1cca633fc051fea829f62db4": "026b565fd542040ec795d7c9edf0ee55",
".git/objects/bd/36c0f98e873fac78439ea1b7b83a77e0c92bd5": "4f23f4106e69affb04cd1155225a9fa0",
".git/objects/bc/dc282fbb6d736480f6dd8a66dc5af314161699": "1ae71a5dc90ff2ea90de830df6ef40f9",
".git/objects/ae/16365fee2239824ebffc4d10c386dad0058f3c": "bc18af6d0114ceb50fb798ed3bb971fa",
".git/objects/f3/4f7bb5cc88f8f4d88c52a396ebb5d5a89e1213": "39bcb213e3600508cf8c65552b87f631",
".git/objects/c8/036edc35f57829ae5c217d8ae0036018db183e": "3f3c35d01e554ebeb08e5e72fe734668",
".git/objects/c6/f4f2e586c451bd2a5224bb457a4673f3fd4ffe": "0a8829f1c870336a05e42ac52d433417",
".git/objects/c6/73732d881629e528d4abe2e561950405d71f58": "da652fb9e60b02b6d43f14445eef8825",
".git/objects/27/62bf5e597142688537cd550b74bf4d70cb4035": "cd64cd0ab8f02c61323f66f9ebd4a0e9",
".git/objects/pack/pack-3c260740514a3fc65020857207b250de9a5a3c99.idx": "e84d829553ef627348d559eec6bdce53",
".git/objects/pack/pack-3c260740514a3fc65020857207b250de9a5a3c99.pack": "911c1accc2744e5b0a19061629cf1fbb",
".git/objects/16/024a2620e3e68a030a3b05d04d35fee7466508": "2e8fb33eed2b7293081ebfebbd8b9ca4",
".git/objects/7b/97c5a2f85bcf8e4520c789292b4bf72482a315": "725e8e8fc4076a8c1a65498e73b7507f",
".git/objects/8a/5616ad299ac155647a744bcda189b969ec2f32": "187b9740345637a7912e531a39a8e144",
".git/objects/2f/59edd1e3d625aa3b08fb41b6d1d307325e48ae": "14a089d9fd1e4c2ac05a533602972c9c",
".git/objects/6e/016e45060c016f81813f368905ce118b76ad97": "14470f1aee1fd3203f12724501ed50c6",
".git/objects/b8/c16beb3269129ffe3677352167110f878d40f5": "7bd4dbfbe9cf754e41ae633b82fdc19f",
".git/objects/d5/74b819bf00bf69325923098ceeb10fe417d1e0": "4a04cfb3b07f60e55ce8cd0a7ebec2bb",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ea/92d8e8eb0d0fb994181c0f473009583d96756f": "60c2120b7192e6569039371a00437b7f",
".git/objects/f0/631c5f1514f2324fd8c5e0bb2f765cac8bfc04": "e3b6509b4969fcc377555b9e84a0107b",
".git/objects/ff/97a02ef79505d52d1aba1c9b9a1958bfd0a812": "bf374982440e869643acc82759459627",
".git/objects/f8/d6640e776f85c8333ec95d9d9efd3474223041": "e3f032874c6911d21c2b12ffba5b94c4",
".git/objects/23/6a19f9a4d5df7e0464a6dfd82de26d6bd4d4f0": "88e99d0abf79924c16dde35a294d493f",
".git/objects/4f/0b2382dee02d33e54578323b53a51ad6c5eb8b": "0be9fbf043a9ee9eafb5f67f5f5ea79e",
".git/objects/1d/754fe8e9a0c19c41ecdcdd5f580c5a22456574": "5484c3f024dfdeadadd9110d93b2e891",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "9ba05f1057ba5fa0991ee8e9c20224d9",
".git/logs/refs/heads/master": "4104775290db9dc8e8670169f1c21b49",
".git/logs/refs/remotes/host/master2": "7ba779cd8af58b2fac3250ec9ae89dab",
".git/logs/refs/remotes/host/master": "83565ba68051c64ca9ded7147e164783",
".git/refs/heads/master": "7cf3e8318aab1489d52861856e85ba58",
".git/refs/remotes/host/master2": "0ee031e088c5e90d03de9c35bca6d685",
".git/refs/remotes/host/master": "7cf3e8318aab1489d52861856e85ba58",
".git/index": "f15e51e045c9d6a17c4b454fe541000f",
".git/COMMIT_EDITMSG": "0164b86ca80fd90a862bb72986832ba0",
".git/FETCH_HEAD": "963090d66db7db77c7ee07c125e55494",
".git/sourcetreeconfig": "92e3df3300383396570c90a8305922b4",
"assets/AssetManifest.json": "8045c44dbdf72fe3fec1e46b2dd1ae18",
"assets/NOTICES": "2f6e310d454a80e773a7903d2b8cc7f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/ppvc_my.json": "c9cfb43c33cb2e07c11c0c91e9cc39dd",
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
