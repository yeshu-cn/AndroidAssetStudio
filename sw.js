importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "icons-actionbar.html",
    "revision": "894cf377b687e7f554a7c2fa05c05dae"
  },
  {
    "url": "icons-app-shortcut.html",
    "revision": "4516c1cdbcdbdb746ee10cd5f7ac9086"
  },
  {
    "url": "icons-generic.html",
    "revision": "dd89de0f3bc5d985fff71d5350818b8c"
  },
  {
    "url": "icons-launcher.html",
    "revision": "bd605aca3f4c8125eb81507c02397ae4"
  },
  {
    "url": "icons-notification.html",
    "revision": "974a62d3e0047238c35cb37d74529ce3"
  },
  {
    "url": "index.html",
    "revision": "a95ce69ebcc241fa9e8cf622c442c5d2"
  },
  {
    "url": "nine-patches.html",
    "revision": "20a6daa6e3f1b46fa66eb8bf267de505"
  },
  {
    "url": "lib/jquery/dist/jquery.min.js",
    "revision": "4a356126b9573eb7bd1e9a7494737410"
  },
  {
    "url": "older-version/lib/jquery.min.js",
    "revision": "b8d64d0bc142b3f670cc0611b0aebcae"
  },
  {
    "url": "lib/spectrum/spectrum.css",
    "revision": "c4570cb2ee0a64de0fb186a50b5679ea"
  },
  {
    "url": "lib/spectrum/spectrum.js",
    "revision": "5f141b16047e7623b415b8bf9d8e0218"
  },
  {
    "url": "older-version/lib/spectrum/spectrum.js",
    "revision": "7c0061805fb7474308c6bc827be17991"
  },
  {
    "url": "res/generator-thumbs/icon-animator.svg",
    "revision": "b49251ded9f4a4d7cbfdbbaee5f53583"
  },
  {
    "url": "res/generator-thumbs/icons-actionbar.svg",
    "revision": "f9772feed41a9be82d0d48b23fce8a4c"
  },
  {
    "url": "res/generator-thumbs/icons-app-shortcut.svg",
    "revision": "e9942bb2f82ee4bf1118b8caf028d4a6"
  },
  {
    "url": "res/generator-thumbs/icons-generic.svg",
    "revision": "74a1ba2cc0d5c07cd9f813bdae7e80e8"
  },
  {
    "url": "res/generator-thumbs/icons-launcher.svg",
    "revision": "8bf87c3256a3c22c0ce8a0961aa9c50e"
  },
  {
    "url": "res/generator-thumbs/icons-notification.svg",
    "revision": "176e148dfca66c91af08c765f1240b02"
  },
  {
    "url": "res/generator-thumbs/nine-patches.svg",
    "revision": "80d3f82955bdd814948bb82d1b4a06b5"
  },
  {
    "url": "scripts/app.js",
    "revision": "0ff897b95ecbd5d8842fd2fef9ec8098"
  },
  {
    "url": "styles/app.css",
    "revision": "bfde59088c1b311065a639b2e7302d3d"
  }
]);

workbox.routing.registerRoute(
  new RegExp('https://(?:fonts|www).(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        purgeOnQuotaError: true,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
    ],
  }),
);

workbox.googleAnalytics.initialize();
