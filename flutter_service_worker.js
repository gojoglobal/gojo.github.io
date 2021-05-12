'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7e61e8891e4e5e697e68b57f216151ce",
"index.html": "78b045c847dc7e371312f143dc704521",
"/": "78b045c847dc7e371312f143dc704521",
"main.dart.js": "32cb3db0b91c8e3d5a1e56c91fbce1d5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "666027c0d18af3164c99892803d7d25a",
".git/config": "d1364d73599a69ae3c6e40fc79749d55",
".git/objects/0d/2fe5cebaeb6765f1edb5e89582ff66f7848ef6": "f66e7fc7cf7213bd76cdbb9bda74addf",
".git/objects/59/69402a316c23444f909d74eac875d0ec06e8a5": "47c3d8407a91956859a3f152b1cfb2d5",
".git/objects/59/ce4f8255274fa8bdfa7e70ebf1d3ec9df8199e": "0f65514fa72c2552f162ad21d20e9ff7",
".git/objects/3e/c6b39832948f4adf5599fdd765eeeaffd169f0": "5158b9c0d6dd00e0da703e04ef820061",
".git/objects/03/d56116ec0688ce925b8e48871c361193f09f35": "679df961153ed7c28eb1a15340b66f28",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/69/19ae576bfef3821c370f8e9eb56f7a282ee467": "6023e7459775c3e28d604b4d208b51bb",
".git/objects/67/4b7227cecba90a2340161a5ff7cf3603e9f171": "8f8959cb80942913ad92bafa651dfd1a",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/0e/35a0b5bdf58213e00c380d1e6999c44ea78e0b": "6cb425bbebfc2e586337d916b359bec8",
".git/objects/60/dc4969171a4c9c67b32bdb7a5bcba17cba2b25": "47d0c33383ea213ab2fd5ba7f9931769",
".git/objects/60/68a51c381759ea12b2bfd1bcd1ad139d8a0c06": "83d6bc45e93ae1d8891d9291f60e5f60",
".git/objects/5f/1596449ab264c08479114e2e941718a82ee6ed": "8501b183ad003d41aa400c0112e1f5ed",
".git/objects/05/d4a2dab77543cbef8522fb2394b7d2a75deb45": "a7c5a8f022fc583efe4104a8b9c722d2",
".git/objects/9d/3093934d6ff453dc8784b1adf5d22b020c6e45": "c5d9ab1463f7d63838036339580fb500",
".git/objects/9d/3e38e34b291108211b9c336fea454a8b016d15": "a764b34a60c853474aa7dd4291faaded",
".git/objects/9c/735b7aae36205b6ab511490e38773607454cea": "89f348670f38b2171156bcd2a2f4e640",
".git/objects/a4/69bde8a16841b92d87ca46e81ae09263eb30a2": "ff07792a0abcbaaba610c48112822e38",
".git/objects/a4/c8fba6908c5913124a6dfc5568e3ab74718bf6": "b26a240c7943ff858d90ce7d1c9fb564",
".git/objects/bb/c311e45424535664ba3f2ac5ffc4b93d856eff": "2b531fe293308a7f61fa614a13102acd",
".git/objects/b3/99c5ff7072a1cbf2ce80150d0b5e8f732e9050": "220b88b988c864bd29dd41bc07e4ec71",
".git/objects/a5/1eb1e187eaef1f4838c6553ecbce50b211b9a4": "6d65ec1650c01361d0e1a13651924ba3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/d2d4df0a431a4b12656ee479187464b97fc3d5": "005d41d4171e21af0ca3564ece5e133d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/24ce00945891c89a42db97e54ef5aa37980126": "0199bd7a7894cadf7bedc783b7dd8778",
".git/objects/f4/119b8a2860fad4f05156c53a6003f2328215b1": "b2b8e53ccf0119cb763f8fddc6863f44",
".git/objects/c7/7b3e2966d1adb9c9b9dbf0f7e78a50c90db6f1": "7c4354cf1e9b7b6e80d04a387f98c82b",
".git/objects/f2/54913dc10c27a9d96c110129ad7ac0e15dea84": "fc0840ce16f9e0923fd4c3288c99fab8",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ca/cfcc965ff94098eed2dd09072b2b9ee5376cee": "c0c9145a0956e8e1c47ab5df14e3a5e3",
".git/objects/e4/c4dc6900fa5def1ece3fb82adbd95376559540": "86d22aadb1a1be8648c4384729e0cf84",
".git/objects/c8/849b5254d94da18a8b19341133a5ce0fc33ad6": "24051504281a5d8506134cf8fc25561e",
".git/objects/fb/7da54f7000833aa1a2d253e27287603db5c0f9": "de720b2d8767475b66d987cd7b84d2df",
".git/objects/c1/276047624ad360f0157dcba861298332656366": "2d0bd5ba631babfc21a52fc5f649f195",
".git/objects/4e/0f97e73085a2c6a36a1043a4f5cbdcc874be52": "ea33b5a4a276c59c2e6a62b67a557034",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/5560c657dd74401365ce9f670cee90de37ed84": "73af41390b3266140031e7975db52138",
".git/objects/27/43d9b3103d041b3e27469a965d2c16201b3a25": "334fc6e836372cd039aed36a09a233c6",
".git/objects/7d/dfde008770bf1fd492b844e55d48063182d60e": "e5219262285523146525ad4e162c2f7b",
".git/objects/16/0757c3fa68712053beb27e0bee797589698480": "b754ef11512d8262733f7a854a713c68",
".git/objects/89/c6d759118e905946d030c624c83aba763ca7be": "198d9faedb367e9bc12b7ca0b89cd078",
".git/objects/74/11df0eb67b9c88c386c4dcc30f2a459918fc22": "1d7ad21da9ef9a265b056074b12a28f9",
".git/objects/7b/ba2f868293011e56290fe6da79a3f09aaa1f03": "9ad2a7df42bb26647a1c35756e2b5302",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/63e13bd30e26f69229d8c26fc480dfcc378b86": "ba5032b2875d531c9f9ed6ec1fb3d23d",
".git/objects/10/81623b5506b0445490322ff6e26d10a80e9c0b": "e6c8614b375b858f7dc1d28643b7ea38",
".git/objects/4d/89c357de89a7a64bc09c01da9549bb411ad203": "dd3070cb272e51f275976a0cffd6c745",
".git/objects/72/7dd7ce4c720f5513371d918004f50b4aa048d8": "4ec02315df2051da3d96c87d204adda3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/9715ea746caeecb7f3b9fea2ff7e666e1c86ce": "739319e3d8dfd6835c7e7232b4c99cbe",
".git/objects/5c/548fe3147003b832047c2e74a379dab74f740d": "dd70508625af7ccb4ab72a2136dc3af5",
".git/objects/5d/931b42f61b31864e2ee32be794d31f7dd97503": "9144e1fa4e4bc74661f4005b1048c050",
".git/objects/5d/a5c7d4e99dd4101f6fb4d84f6c6eee643cb597": "f089d54e7d41024efb0156af5ddd5f54",
".git/objects/31/4f45f281585f30add76e7c99982fc1f76510bb": "0e81e387bb60fe202d8a4809d1fa0adf",
".git/objects/53/80cfd834c2f49832eaeb53e65591fcaa85e54c": "f7051ffac3617c6971ddf3f479660d16",
".git/objects/30/2d34246f969d18e718ed3f3cf546ad724f706c": "f4aa3aa9ba9289eba53493e15651156f",
".git/objects/6d/f678536e2f64dc010503babe7bbe4576e0e885": "0cf736502f7c583426f74c411284e985",
".git/objects/01/5edcd76e5659ea5cecb821c360d475838ca9fe": "a1c50ebaf9ffd60db6b4d64358783657",
".git/objects/6c/df21c7a19092c9c708c2c62cb4d11a0cd1d6c5": "7007e679aed950b8ce1aac262ace5eb5",
".git/objects/39/73f054faac7b6eb581043ce39525b08d25a79e": "4ce25d2494acba5fde94c0d127719596",
".git/objects/99/88c6b05acd4d7e0de702738ca639a67f0742ca": "962ccb78f7e34e99a1f4dd686758eac5",
".git/objects/52/866d97608d41380cc4faaa9650e8f7f17e752c": "a1c6726ba4547af961e6a81ecaee4022",
".git/objects/b1/e105581c8845bd523eec08c453b322a2d630d3": "3289f068494e4541efb50beae4dc9969",
".git/objects/b6/6d7397d19e95453cf193121f0df0d3d3a98b36": "ecb26c10a470c8d5521f8b9a17f214cf",
".git/objects/b6/f662dce8b3d16597ea0ac263e7725ceb4b958c": "211f56ea3a2b80573b90e5c208f2b9fa",
".git/objects/a9/245f7d7b9660c26509878b90156340b496d52d": "4e10337fdc24747e992a05bc9b3d0457",
".git/objects/d5/f4304915a15644aafb01c80c872982a83102d2": "42e34f10de9f48f62f9acbdb5f8240c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/a8/75fb584e99f6880a76738952323bd7fe0f7746": "558aa455c60337ede4ba84cac529f7f9",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/566b1fe5c1d354753a6a22929f3f796d33a2c6": "4002a8c10b4470a8e1959f2896f1b807",
".git/objects/b0/eafd9399a7982f7d5203676cd177898867019d": "3869d12756e999046a9eb02fa2861eb4",
".git/objects/a6/0350c5fac7133483ced975d841e4e9c356fc34": "7be3c219a5f3fc839292f438756d60df",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/c560cf5114500dbe58526b4cbd4b69fa062940": "172c0ff5ce63f64577ad25a46b43bf50",
".git/objects/cd/0d8706e51460f5f93596627f4d8cfd3da14bf4": "1e8d1df3f8ae5929e2d082566de287ee",
".git/objects/e6/fb2f30c561a6e4e742120c53e8935e4665a1c4": "33dbae03949fa38114afc042ffa6350f",
".git/objects/f7/e4c5ed81b1bf94993de95d5146ec798d75f4c3": "a04cd80a12479aa26f6cef6530e16610",
".git/objects/ff/1c4b975c258bc06d4736a0a4b1aee72a0f4467": "30c517f33952b2e23afbad0a1b701e94",
".git/objects/c2/812b1d83bf7b087c64baacfa499f1e0533b77c": "a0f4815131a9664629fb0b54d9885eca",
".git/objects/f1/8cec975408160950991c9e77fc24b5a8a668f4": "65e16f801cea943c7a146978e851f6d1",
".git/objects/f8/4f3a3fde3d016be1fc5313ae0ceb3aeff94534": "64ff0e77580693f6cf9adfbe7855b617",
".git/objects/f8/4657af5ff632a85debd4a6484cd7b6e69ed570": "2b35901cbc2b44aedc108b9cae52f35e",
".git/objects/ce/c9b48f833c2746ce8aa3c8c068b955cdf3a760": "f93169dc23b09f9fd860ab6c1aa03493",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/6f85082dba84a69d621d0c6a85c1db9fe07787": "1aadc90fd58a85942281e1f0cdd29578",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/555d92dead09813edbf7aa736c8391d4de5250": "b53bdbe009f40a9f4a7e4e3fc086348a",
".git/objects/77/0b08095378479814fe678d574f201d3fca317b": "0f987b13acfbf5d3d99d27fc3e91197c",
".git/objects/77/b4774418c53d061317fd54cc6e74c46348a123": "f005e17ebdde037c6377f2cdc15c9432",
".git/objects/1e/6dcc3afcf7bdc936f3c5f4e9fa9fdc4a34d3c6": "7406e297fcf4fcaee89d29a4294774f5",
".git/objects/4a/fdca5c0cdf4db3b012358e184347dfe8420043": "768a946d5adc676cfd360921593c7af0",
".git/objects/4a/f9cca2636f41595d7f2c7d9a1598bad24934c2": "574beeb021d7b8a15cfbe8cb2c082b9c",
".git/objects/12/5f8af713e073dbed2acd91317dc3a642ac43bf": "814566ce7ab8989bba9465b8d68ff378",
".git/objects/76/d4b5ffaefb000f6e021a1141167982a3137df4": "ffae431dbc7cbc92f3f8375c1378eac8",
".git/objects/49/eeab56f5f22ff7fa5214eae7a2efd4c8593fc5": "10c0b8a1630deaf8f6f44a0bdfaa138c",
".git/objects/47/084802ef99a0d4798d4ce84adf017d2e049213": "ab37313af47b0eaceff9488e753be939",
".git/objects/14/4e9bb53e0088377c2a2238dd6d730e0619c0a0": "38c6ba5fc71d121ce252a3f885d63cd4",
".git/objects/8e/ec64393577ec2cf4060e184c2ded2d72cd539a": "41cb710b8ffe039f4f8be8ebf0309d93",
".git/objects/25/cb00bc15d5355a28fd94b915515d0b98104afd": "470a00d840b92e14d4323d6bf519c90c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8423c372098249f0d8b859e66e068d2b",
".git/logs/refs/heads/master": "8423c372098249f0d8b859e66e068d2b",
".git/logs/refs/remotes/origin/master": "cf0fb60e97f9208fb096b1eb93f85458",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "c680342366e3fc696bed127f7b98c309",
".git/refs/remotes/origin/master": "c680342366e3fc696bed127f7b98c309",
".git/index": "55411e9e1eca13b2d195afeb0c84701d",
".git/COMMIT_EDITMSG": "6e6c2420ff71849263a56ddabc5a1731",
".git/FETCH_HEAD": "ec2673a77278908a5c150aeb3054fe3b",
".git/sourcetreeconfig": "fd14f82c944b5b2ec57ae7915cfe32b4",
"assets/AssetManifest.json": "1ba44ad26908fc1112b79f7506be50f7",
"assets/NOTICES": "fe47f11879ac600a33f57c0c9eb607ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/ppvc_my.json": "8c7f45f8fd0fb6b1ce2d5d60e5a0e268"
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
