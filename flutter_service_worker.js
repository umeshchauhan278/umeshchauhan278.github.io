'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "536df5ab64000aa22f35811508c1af5e",
"index.html": "2c3fe15567680ec4c63d387cea45e591",
"/": "2c3fe15567680ec4c63d387cea45e591",
"main.dart.js": "1ca71bef2df593c3189262af574fa3c6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d792d25dcef3befc094a797e0b3fbd53",
"assets/AssetManifest.json": "11796eb1f75caa4e99d1de47ebff80e0",
"assets/NOTICES": "b76329e6083439983269653d2533cbbd",
"assets/FontManifest.json": "06687afcec88b00d89372cf55fb6cae8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/anim/loading.json": "bffdd110a3d969836b5874f69cb1a543",
"assets/assets/anim/success.json": "4cbc6bd7631b1efe6487d1793262a0c5",
"assets/assets/anim/partials.json": "b7f3057688a2172c095f60ddd2142af4",
"assets/assets/anim/fail.json": "f7c8b1efc9a23d69d944d079ac8b8e9a",
"assets/assets/Images/icici_logo.png": "8f18ddbb1b15512eb6896f9e8c3bfa6f",
"assets/assets/Images/no_income_proof_required.png": "284eecb67b8a6c9d04deda9e92cbbbbd",
"assets/assets/Images/loan_logo.png": "691bf414082f8d90c17ee2bee8666c90",
"assets/assets/Images/upward_arrow.png": "3859cbf5a9dfdf73b2274b652ac41477",
"assets/assets/Images/upload_picture.svg": "9e875fc5289908506ecca5417fcc1897",
"assets/assets/Images/verify_mob_number.png": "d248819d8f83d461d25f3e853f57c76d",
"assets/assets/Images/user.svg": "1f62a44a0a04e85729467256b9d5d960",
"assets/assets/Images/wedding_rings.svg": "9040c8947115487735eff0f784039f42",
"assets/assets/Images/download.png": "ba0b0df2d9809d19b53844e5e2c5dcda",
"assets/assets/Images/light_bulb.png": "0ab81dd60bf7f7b4d3b77cadd68f06e4",
"assets/assets/Images/credit_directly_to_wallet.png": "6e2bb30b8be63ac1559b9c0e3680b17f",
"assets/assets/Images/visibility.png": "7885021ae46c9dbc88f4ac5f63a1e00f",
"assets/assets/Images/cancel.png": "cd79b75282f6e14a3d80e875d9e72bd3",
"assets/assets/Images/apply_for_loan_logo.png": "26e5d17f87023215dfcf249150dd62e4",
"assets/assets/Images/downward_arrow.png": "93d85673922390306187ba7c4435ae32",
"assets/assets/Images/person.png": "cd8d9a370d66f5b31396f15593a0adb0",
"assets/assets/Images/header_logo.png": "8b77a18daa029b83263ba7d1466e06c9",
"assets/assets/Images/emi.png": "6541ea83bc930c95c81cb6423c76fffb",
"assets/assets/Images/bank_grey.png": "1cb2d5b5a3c99515f98b91feb053349c",
"assets/assets/Images/full_digital_process.png": "1d85425d942f2118b9b2ca10cfebafce",
"assets/assets/Images/payment_directly_from_wallet.png": "2b68ab595690c92dfb2edb8ce7234fb1",
"assets/assets/Images/check_logo.png": "1a208b06861ef13458056e3c1fb51557",
"assets/assets/Images/ic_loan_offer.svg": "cdc98abba8a786f1743c53cb7f25c968",
"assets/assets/Images/check_dot_gray.png": "08387c9e09bb71ad4dc3abba8bdac505",
"assets/assets/Images/pan.svg": "a8c5fd93a1bf787ba686a5eb5d342f15",
"assets/assets/Images/check_green.png": "d6b411c9d151eb35b27bec434501b12c",
"assets/assets/Images/loan_information_header.png": "7457e5be7b8b9989598ec5db0f4aad35",
"assets/assets/lang/en.json": "a21e1bcf6d15c36ac00eeb9609d1de2e",
"assets/assets/lang/hi.json": "a85ff80d5fa69229667b8315c968bfc8",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/assets/fonts/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
