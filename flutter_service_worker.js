'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "3cb36e943b3bb6e58f40ea8e7821c0b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "515eb675438ff1ed408e795cc5c4953a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bed44ffedbdd2aa43989e3927dccc930",
".git/logs/refs/heads/master": "bed44ffedbdd2aa43989e3927dccc930",
".git/logs/refs/remotes/origin/HEAD": "bed44ffedbdd2aa43989e3927dccc930",
".git/objects/09/5542a427c748185579a8fed971983216403c35": "8d93f70e009743946b84f884c15eaa26",
".git/objects/0b/3d394c1a32364a9c063a3d1570fd414ef26e14": "823241e5a8f235f6cad9f59293f61311",
".git/objects/0b/5feb61b6e70da4f4f66f0c148ea977b7739d97": "8c881cbada40501411ea0fd275a902ce",
".git/objects/2e/6b7bd84802d5f1a2288f0a46777b727c015846": "df5bd62e03b7577f5a704a328a05b143",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/42/a3c9cc40efbe7a6729a428b93f2f9a0d57cda5": "94b9480a3e1b75a2a04dd98df952d5f1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/3bec435c35e58d45f5075ccd02fc378488613b": "3b7e8208155d1ddf4e2c4f873dc037e7",
".git/objects/6f/48914c4708e19b0fc86b55a8fe185864ff0e77": "0ae575c47d45910b256a7b31dc05f00b",
".git/objects/77/8f4a0f684321490bb37b1a502cf1b4d9f142ec": "e6a43d73dab5eb7f710ae00545f70723",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/1c79b7776bd61dd77ef647805499f72a60010d": "2b09adcad13eb350453b81f57fa63eee",
".git/objects/95/05b2d139a83e738ba023a3eb40363b212d504e": "e1c343d53e942e95ad581970913644d4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/4a834ac3d14ab19a8da73ca05bf5dce68bdab2": "eb5cc24d686c851e9204944d3e6ecb80",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d78d088a55d096d42145ead9fcc95da3fba6ca": "86723899bf03b898aa23c75ee268fa0e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/cec3ab497a2af1b83d109205f7ca33f80d5753": "8fc44ba32f5a776cbd6033544fc9d792",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/b7daa605072937eb874e4547fc3e99115eb345": "5c986fd6e9618859770fea827352c9cf",
".git/objects/bd/8701769ef8075b261baa003795c5e939c45739": "68955055c33c0f75315631b32982d506",
".git/objects/be/d5aa9b65d99babd972bd7a389671f9fe1e79c9": "b9530cec7193f3a21d4652df0bbbf0af",
".git/objects/c0/68cb405ba4c44ab2df9ca7698389d3cab1f1fc": "9f9d536efd84db12ecf84900fd962b35",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/d6c90900b18b655e658d98495af96c220b2f0a": "0b9806662c43a24a0e69f240b50f38c1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/020a50d1a455ddcc5eb13bdc42cbeaff34ebe1": "5bfdd7bbb65c5493a693c27fdf1eb10c",
".git/objects/f4/b7143eec2c2193a4428e9cfe2ba7def8c42913": "748a338c41b4067cc7e4c9ca597bd6bf",
".git/objects/f6/33a02fea414afd600ef1912cba3400a80572c9": "46802c526ced0b820d663c8dedc82495",
".git/objects/fd/b31251e197e5b13174bab686e8f4683c84edb8": "d1b88ff27080dd38eba79d1e71fb6907",
".git/packed-refs": "6a88317dffb07ff9d8e84cdc1a05c8dc",
".git/refs/heads/master": "e0a420ee16c5fc0ce14b5985c380cbd3",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/asset/imageData.json": "2160d48e2f1c18dcc63480b81e8ec1ec",
"assets/asset/images/circle_blue.png": "71605892051b9effcbf85495c290f2af",
"assets/asset/images/circle_red.png": "bbd5d11f81d382f3755d877a0314dfa4",
"assets/asset/images/circle_yellow.png": "9ab18083954be29e6b22a840d8f070f2",
"assets/asset/images/glass.png": "de2acd88fe694b9bac5fb5e437f603ab",
"assets/AssetManifest.json": "0ebe90af78be87fb216d4a9ecbb36419",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a0adb9c9ae2db8d09d6c9a95751a83e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "39597cdbfb491a50a174ab55e7ac6525",
"/": "39597cdbfb491a50a174ab55e7ac6525",
"main.dart.js": "c4cb452604a99f94677549bcf3092277",
"manifest.json": "7a90ed3ff553d497e17730e63c8ac34c",
"version.json": "b92e23d054bfb67ccb8e822d62531957"
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
