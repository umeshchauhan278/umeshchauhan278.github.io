'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "441a8549816cca1008c4d6ae6b8338e4",
"index.html": "f4641a5963a7f3d006a83349bb4403af",
"/": "f4641a5963a7f3d006a83349bb4403af",
"main.dart.js": "00e574bf89be05bdc244ae719f14a28a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba0afcb20a1ced565e8d6abce35f98ff",
"assets/AssetManifest.json": "341dafcec9c3584cd296ec1bf767a5e3",
"assets/NOTICES": "ebeedd1365ab0816e77d1ae2d621a7b5",
"assets/FontManifest.json": "6365d1df5fe3298de4d71376794af52e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/fonts/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/fonts/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/fonts/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/fonts/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/assets/images/customer_information/user.svg": "1f62a44a0a04e85729467256b9d5d960",
"assets/assets/images/customer_information/rupee_icon.svg": "96b5ca52f936af439490132fbcb034ab",
"assets/assets/images/customer_information/coins.svg": "fa6a317daa522c9b48722b7e3fd9d279",
"assets/assets/images/customer_information/bank.svg": "ffa49a9ca811a6aa5f7badbc29120c10",
"assets/assets/images/customer_information/mobile.svg": "f72150c8e94c5472b5a5322ef946e000",
"assets/assets/images/customer_information/pan.svg": "a8c5fd93a1bf787ba686a5eb5d342f15",
"assets/assets/images/ic_loan_type.png": "8cb6d31592188f87623f50a14d889393",
"assets/assets/images/3x/ic_step_done.png": "32528354dc715a9d4fe493e8082dec61",
"assets/assets/images/3x/ic_marker.png": "3207ff1df2f559f1177b2e7988d7346e",
"assets/assets/images/3x/ic_marker_white.png": "e8dd7772262e3b69e69ad2c8b3cfbfd1",
"assets/assets/images/3x/ic_location.png": "79c9a1d2912dd62542cdf4809769dbc4",
"assets/assets/images/3x/ic_print.png": "6a177934a0c0786b678f1e3bd6480405",
"assets/assets/images/3x/ic_no_operator.png": "0d7899b6e0c3b0e5b9400463971a1613",
"assets/assets/images/3x/ic_share.png": "97ba4dbbc2c2bb347cd9523c84329246",
"assets/assets/images/3x/ic_clear.png": "9f94ffdb8d6285cb249941840fcc1461",
"assets/assets/images/3x/ic_edit.png": "3c03339512e59351d7e021ef2963b496",
"assets/assets/images/3x/farmer.png": "cb0afb758dbf17a6f5383006a786f968",
"assets/assets/images/ic_cash_in_hand.png": "c6a0e6e08c3a2f406bd5ed52ce2b4fe9",
"assets/assets/images/ic_step_done.png": "fb8b0b8dcead2bc30971b5a6fe352239",
"assets/assets/images/ic_business.png": "debe5bcffc13f3aabc760f2c1211a546",
"assets/assets/images/ic_down_arrow.png": "4b9680438b662fe9a3a6bd78e24cf0a8",
"assets/assets/images/ic_marker.png": "56f0039a8e73eca57ea71e19bd936fd2",
"assets/assets/images/ic_marker_white.png": "53171e99281436bff01142214e607bf9",
"assets/assets/images/ic_gold_loan.png": "a3c0b95f9753cca39a7fb0fa6effb984",
"assets/assets/images/ic_location.png": "791f9b68e177c43132ddc4bf71766167",
"assets/assets/images/ic_print.png": "201cf45abe9b3a58ed23eb1c720424c8",
"assets/assets/images/img_product_intro.png": "2598324dfe9a2960a4ff1f0eab9dc386",
"assets/assets/images/ic_four_wheeler.png": "e13f4d7b5451112da6043f6bccf3852c",
"assets/assets/images/ic_commission.png": "f9f5fe55bcd2750b70d3d751c4a6e7fb",
"assets/assets/images/ic_history.png": "5bf31089d18fd4032f770a77cc462fda",
"assets/assets/images/ic_security.png": "df9d2a113da84bd5c619a67d7aa71e53",
"assets/assets/images/ic_tractor.png": "f36012646f3695df625c0c4b7f425b27",
"assets/assets/images/ic_no_operator.png": "54eed948e047f87f7e1ae843d92a4140",
"assets/assets/images/ic_share.png": "102f2a88f09a04772b0fef33b5b7dba4",
"assets/assets/images/ic_agriculture.png": "58dcf53213d8a6af4d3f915e2ad4c3d2",
"assets/assets/images/ic_clear.png": "e8cc48a05219c30a6dc49549fcd8ceb9",
"assets/assets/images/ic_edit.png": "44bce195e0873cc47714e3ed88b209c8",
"assets/assets/images/ic_close_black.png": "e31e651b995067d101084f7027cad3f6",
"assets/assets/images/ic_two_wheeler.png": "803007fd597ced518e54c2ee75892185",
"assets/assets/images/ic_age.png": "7d16257a51f339259935a1ef0b7bf966",
"assets/assets/images/farmer.png": "164cc42c47944b123c6486321da5c553",
"assets/assets/images/ic_product_screen_bnr.png": "038919132563e4abc5c8fa1881210370",
"assets/assets/images/verify_mobile_number/verify_mob_number_2x.png": "66f0fe1b8c08e5e8e7402c58716c978f",
"assets/assets/images/verify_mobile_number/verify_mob_number_3x.png": "d248819d8f83d461d25f3e853f57c76d",
"assets/assets/images/verify_mobile_number/verify_mob_number_1x.png": "37697c4325c38d4de7ec2a87fa5c5998",
"assets/assets/images/ic_done.png": "e788da1ed6a748aed7a4c464440673d2",
"assets/assets/images/ic_business_age.png": "3580aa0ca85f7d078b4d99a18a64653b",
"assets/assets/images/ic_loan_title.png": "a34a96db37139817e51fb9f81f1ba5f0",
"assets/assets/images/ic_loan_default.png": "c597b8248010da41a1bb880dc3d12333",
"assets/assets/images/2x/ic_loan_type.png": "29fe0c11d71b8e86adbbeaa5ef6666c2",
"assets/assets/images/2x/ic_cash_in_hand.png": "17dcae632b00ca5302e46e77b1f3d68a",
"assets/assets/images/2x/ic_step_done.png": "1b44cb79cef2d4c0b14721f0964dc242",
"assets/assets/images/2x/ic_business.png": "a7d6187d9652ffc7f51b38676edffc2b",
"assets/assets/images/2x/ic_down_arrow.png": "a96681d84cfb14a477108be123eaba68",
"assets/assets/images/2x/ic_marker.png": "7702f210fd590373a01472acdc369215",
"assets/assets/images/2x/ic_marker_white.png": "bea335474361040dab67afd6b6cdab4b",
"assets/assets/images/2x/ic_gold_loan.png": "f56336acfe621de6fff82d3b04cf3940",
"assets/assets/images/2x/ic_print.png": "6d682407f84fb64572604555daadac76",
"assets/assets/images/2x/img_product_intro.png": "cde44faee91b3899c60ee80dccbc0166",
"assets/assets/images/2x/ic_four_wheeler.png": "456f0d76d850d54b09a84d6c23aec6e8",
"assets/assets/images/2x/ic_commission.png": "56cccc13d687af7ce4f5855c492d4ca5",
"assets/assets/images/2x/ic_history.png": "75ad7131849585b4aa66e3c854c101e7",
"assets/assets/images/2x/ic_security.png": "4ed8fefb01554220fc9365860a1f0bb5",
"assets/assets/images/2x/ic_tractor.png": "e7d9686d92a8f8d40ff2ebeb0ad7e611",
"assets/assets/images/2x/ic_no_operator.png": "e8cc880a9a257c5f636a1bca6c8bcc32",
"assets/assets/images/2x/ic_share.png": "5a6226b1830ac8e765ef29814faf3ec3",
"assets/assets/images/2x/ic_agriculture.png": "9d0b4263b439f34588c3f8bee3dbb1b1",
"assets/assets/images/2x/ic_clear.png": "bbf9d864e0c741a159f8c54519d37072",
"assets/assets/images/2x/ic_edit.png": "57b4922139bb99fd5a2e8543ad709d68",
"assets/assets/images/2x/ic_close_black.png": "54bd80878064c8af1fe77fc1155698b3",
"assets/assets/images/2x/ic_two_wheeler.png": "400d298306bdd877eba83a3ed8b47173",
"assets/assets/images/2x/ic_age.png": "a11f83d155456fc7307102103ae53695",
"assets/assets/images/2x/farmer.png": "5a30ff7f9eb04d68eb161ab70771a15e",
"assets/assets/images/2x/ic_product_screen_bnr.png": "1e1ca6d788b0cb23f4ed6982e93cd445",
"assets/assets/images/2x/ic_done.png": "df426a556ca5bd7b977a75fd21f2a3a8",
"assets/assets/images/2x/ic_business_age.png": "cc2087262dfa658f9929fed9525fc59d",
"assets/assets/images/2x/ic_loan_title.png": "8ff9b050bf4c612c3890ee9b340fe4bc",
"assets/assets/images/2x/ic_loan_default.png": "11cb54499b0d9cb7587ce31336d3c3ec",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
