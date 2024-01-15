'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c118d5fbfabd5857ac0bf494f72b092a",
"assets/AssetManifest.bin.json": "fd1372d8ff7fe5dbbdbf942ce3791e78",
"assets/AssetManifest.json": "3a542a35703498a53f386366a09e04d4",
"assets/assets/images/banner-0.jpg": "231ba3f1fc70e7fbf4e2610694a3b993",
"assets/assets/images/banner-1.jpg": "fedd30679fee249f6c3fc4a433e5f395",
"assets/assets/images/banner-2.jpg": "a2a08223e5b1304ba6c89cd655e54f7b",
"assets/assets/images/banner-3.jpg": "59f4ed279f9312a3a38b14a510f8eb2d",
"assets/assets/images/banner-4.jpg": "ccf4d568fa68dccc0a3ee7e1cade1b94",
"assets/assets/images/banner-5.jpg": "a7be4bc4116682f9dde74368629da2b6",
"assets/assets/images/banner-6.jpg": "f736c09ab2d8718fb20ebf0671c43436",
"assets/assets/images/banner-7.jpg": "978e55fc3f2bf9ed1cfd44c6994abe28",
"assets/assets/images/bride.jpg": "b958f3df0859f4c4d39125c7cff0c480",
"assets/assets/images/camera1.jpg": "21cbddfe7967e7a1bab70ee280e6a0df",
"assets/assets/images/camera_icon.png": "0008023cbf8f5ab45f233c83f2558756",
"assets/assets/images/crm.png": "b946e3f8bd42e88140c3f05486871dbc",
"assets/assets/images/decoration.png": "c6f38260550ace5d5332e3a277f49f29",
"assets/assets/images/discuss.png": "a78f195db6ded5f25cf688839f8baf8e",
"assets/assets/images/hbd.png": "9d12c6d56b0e547108872162b34f9254",
"assets/assets/images/logo.png": "f2ef442b2a34de1252d7cedc50aa3600",
"assets/assets/images/m-banner-0.jpg": "9c292b091daa04d4f4edbbe7c447caa6",
"assets/assets/images/m-banner-1.jpg": "67d0ab00a76a2c6cae551d4aa8f09ab5",
"assets/assets/images/m-banner-2.jpg": "6dd4a9af61d1a7bad96617b34696967e",
"assets/assets/images/m-banner-3.jpg": "9924ce6ad8358ea2d997836a977807b7",
"assets/assets/images/m-banner-4.jpg": "919b15112b375ab278046b245d51ecca",
"assets/assets/images/m-banner-5.jpg": "50cbd438594366c16352f7b70f8bfdd2",
"assets/assets/images/m-banner-6.jpg": "0091ab9ba172b1500aec751d1e6631d4",
"assets/assets/images/m-banner-7.jpg": "65050697795140198e8c6723f1b0b490",
"assets/assets/images/magic.png": "5ebe0d7180158c78dc91114ecafe0f58",
"assets/assets/images/mail.png": "e3081201a9dbdbc1090d560a35333087",
"assets/assets/images/makeup.png": "2f2de82abeb229936ec4b1cbdc711716",
"assets/assets/images/market_auto.png": "33b601a33bfb699be944f068a7706dd4",
"assets/assets/images/Partners.png": "5d652536a0605a1e3d0f25fd3599c4f7",
"assets/assets/images/pngegg.png": "26fe35212d1659debf23adc2829b5e91",
"assets/assets/images/sms.png": "24a1f7bf037b8374808279377a5b3ef8",
"assets/assets/images/speaker.png": "177f4090b371b66252b3b9903dd1d847",
"assets/assets/images/urban_woman.png": "d7084f669ef2403289aee5d9f8e942cd",
"assets/assets/images/wedding1.jpg": "16bd832883edf5e78b1cd8f6f7885d9e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "f4e09dd8248916bd148ce88094893b0d",
"assets/NOTICES": "3ca7ad8550af1ec1e32907907429e6db",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "117ce6390de83632087ec9d7706977a2",
"/": "117ce6390de83632087ec9d7706977a2",
"main.dart.js": "e26ddd1dc2069941afa42b829ac5c699",
"manifest.json": "6c6f8050df001f603952ba8aa25df385",
"version.json": "f6af646e1ddae47f438f61a43f4f3fb7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
