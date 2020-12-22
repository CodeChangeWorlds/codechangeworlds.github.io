/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a0974d5446c21707b7761e49be44e83e"
  },
  {
    "url": "about/index.html",
    "revision": "0b0e1119bd4ce0e7ecd6d8c31d68bafb"
  },
  {
    "url": "assets/css/0.styles.b39a1062.css",
    "revision": "a7979445e0ae9cf07972b9200d49bce0"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/home-bg.fcfbfbd5.jpg",
    "revision": "fcfbfbd5231c8057d1be4516f10538a2"
  },
  {
    "url": "assets/img/loading.9111579b.svg",
    "revision": "9111579b51f5dedc91eec1a9b4228a9f"
  },
  {
    "url": "assets/js/1.e10df0b8.js",
    "revision": "060c1797f3890c75bae03a6f3dfcb202"
  },
  {
    "url": "assets/js/10.8b8f201a.js",
    "revision": "fc810b0960638cd8bacfec5c69e5f6e9"
  },
  {
    "url": "assets/js/11.8236576a.js",
    "revision": "3f4a14f95fa71a1a836f2d477980bb6a"
  },
  {
    "url": "assets/js/12.ccea2f0f.js",
    "revision": "1aaa6d546050d786bbcd120fd463be1f"
  },
  {
    "url": "assets/js/13.717fd818.js",
    "revision": "54734c9d2c502e0e46d932b47112f005"
  },
  {
    "url": "assets/js/14.f35354d7.js",
    "revision": "5e00c22c6e977fd2a418f9be5ed53cf3"
  },
  {
    "url": "assets/js/15.7a1b5fc3.js",
    "revision": "d02b06c1b81bd6c86c7e92d9d2c75bfb"
  },
  {
    "url": "assets/js/16.495e39cf.js",
    "revision": "e329a260961f51e1ec807e2e1012d0af"
  },
  {
    "url": "assets/js/17.3a63db61.js",
    "revision": "139cf73d97ec3ef0ecfca602217a7f3d"
  },
  {
    "url": "assets/js/18.b95f19c4.js",
    "revision": "d0f8cd82d72155770f20c2fdf61bfe63"
  },
  {
    "url": "assets/js/19.51b0e517.js",
    "revision": "39b9ead6cfd2c6a11b687605215369d7"
  },
  {
    "url": "assets/js/2.a824289b.js",
    "revision": "91ba9f9b935a1f79cd9cdfee8ada2a6f"
  },
  {
    "url": "assets/js/20.ae8bdc49.js",
    "revision": "a4cf63cdf58ba39c9bd3c31a45089b1a"
  },
  {
    "url": "assets/js/21.aea43ab4.js",
    "revision": "635a8a501e5a974c00d5cd3874b901b6"
  },
  {
    "url": "assets/js/22.66f232af.js",
    "revision": "85602633be2b06c4ceac8d867040714d"
  },
  {
    "url": "assets/js/23.a7b97c8d.js",
    "revision": "bdc639f6a47a55e0ea50f8c622fe24f6"
  },
  {
    "url": "assets/js/24.b4a3858c.js",
    "revision": "30789345604620c3247e75ccb30b90bd"
  },
  {
    "url": "assets/js/25.67787e36.js",
    "revision": "5e835f6a24592f8a9742036362995c15"
  },
  {
    "url": "assets/js/26.5d29ac14.js",
    "revision": "9ede0e8ef15461dfaa31447d93896a26"
  },
  {
    "url": "assets/js/27.b2f0f4d8.js",
    "revision": "a38f85884d9d11cdc28089e381402837"
  },
  {
    "url": "assets/js/28.827d2777.js",
    "revision": "14379ee9ead191488aedabc2bcd37f1a"
  },
  {
    "url": "assets/js/29.5cb51950.js",
    "revision": "22c6d7b99b94b1e14125225348d7fc39"
  },
  {
    "url": "assets/js/30.91948daa.js",
    "revision": "5a043c55128de2939b49bf9548532116"
  },
  {
    "url": "assets/js/31.aa382232.js",
    "revision": "479b4a47431195cb509b3556c2fa1c68"
  },
  {
    "url": "assets/js/32.cc2ac21c.js",
    "revision": "58290cef30098d1b35ace31b5fc9822b"
  },
  {
    "url": "assets/js/33.7651f735.js",
    "revision": "950bf95cc8585f361a09c850f3a7de41"
  },
  {
    "url": "assets/js/34.97216e1d.js",
    "revision": "de6e4c7b5c637a390908b7358cec2a4b"
  },
  {
    "url": "assets/js/6.6182f73c.js",
    "revision": "f4c3e8b14bbb3c7e863397cb36c59448"
  },
  {
    "url": "assets/js/7.808b7d20.js",
    "revision": "04f0a8339bae17c880a1d0388b27fa46"
  },
  {
    "url": "assets/js/8.6754dec6.js",
    "revision": "67c27c90120222ba169af15b14e7185b"
  },
  {
    "url": "assets/js/9.76b00e71.js",
    "revision": "593b439247333c656a0b070c491c84c2"
  },
  {
    "url": "assets/js/app.192c93be.js",
    "revision": "d69889f3ab6698efd6e49594904fe0d9"
  },
  {
    "url": "assets/js/vendors~docsearch.65d5d153.js",
    "revision": "7805996baf02a22b9c93db6cc0e9a9ee"
  },
  {
    "url": "assets/js/vendors~flowchart.8b09db0e.js",
    "revision": "f8c847a035b030bbe192e287818c1dd2"
  },
  {
    "url": "categories/index.html",
    "revision": "26b696d7ed02fcb87a2417f126789214"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d40ab8ba87afbcedaac167f0e4cc5ebd"
  },
  {
    "url": "categories/总结/index.html",
    "revision": "abc15a0b99ba2ef740743d041c362f90"
  },
  {
    "url": "css/icon.css",
    "revision": "28006674d64b4c2ab687b7967aef3b29"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "e4f97a8e278e3c3bd356937e5018890c"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/js/1670d2d20ead32ec.gif",
    "revision": "2d2f74f2d43ac5283f0328ba9288721b"
  },
  {
    "url": "index.html",
    "revision": "4e2c025ae4df0ec61f01c7970e5c7534"
  },
  {
    "url": "other/project.html",
    "revision": "e2a85822be9e04eb26ef472e5561fb74"
  },
  {
    "url": "tag/Css/index.html",
    "revision": "d681ca55d44523739fd7f9c6f6f51a2f"
  },
  {
    "url": "tag/index.html",
    "revision": "10ba234693c1c42bfdbe0b8d4397bcea"
  },
  {
    "url": "tag/javascript ES6/index.html",
    "revision": "756bf065cb64efc0e820ffdbfc62f4de"
  },
  {
    "url": "tag/javascript js基础/index.html",
    "revision": "d35950517eb530631ee119b29f1e4379"
  },
  {
    "url": "tag/javascript js高级/index.html",
    "revision": "af9429f843013507435b90e49afbbd8c"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "7652884faa4c578d03e9dd65c138cef0"
  },
  {
    "url": "tag/调试台/index.html",
    "revision": "ef9c313db9c01500edc11ffc878a63d7"
  },
  {
    "url": "timeLine/index.html",
    "revision": "e352dd93c84221ecf6e0fc965fc7c929"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/rddek.gif",
    "revision": "638c77362a2c110318d58cc3935f3177"
  },
  {
    "url": "view/比心1.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "views/front-end/CssBFC.html",
    "revision": "575476ca12f4aa16b3c00e5d28e3979e"
  },
  {
    "url": "views/front-end/ES6 知识点.html",
    "revision": "3d38bcb9acfa065748cf20ac70c6a259"
  },
  {
    "url": "views/front-end/eventLoop.html",
    "revision": "dff09ab66475704e0ff6f69db67b17a8"
  },
  {
    "url": "views/front-end/JS 基础知识点(二).html",
    "revision": "c43906c007de79a0441f9e2717f9b115"
  },
  {
    "url": "views/front-end/JS 异步编程.html",
    "revision": "8c4dd3a0cd67aaf88d0d6b50e561ee8b"
  },
  {
    "url": "views/front-end/JS 进阶知识点.html",
    "revision": "38490ec519221e9d54e85dfa26381a75"
  },
  {
    "url": "views/front-end/JS基础知识点(一).html",
    "revision": "5ac0730aea2e693c2331fd7c7183a8a2"
  },
  {
    "url": "views/front-end/realizationPromise.html",
    "revision": "7af7ea8852bb5d23113231d08ef61078"
  },
  {
    "url": "views/index.html",
    "revision": "3c111e82726df30ac45abd9dccb12047"
  },
  {
    "url": "views/qaq/DevTools Tips.html",
    "revision": "a18e245aff6b7dad561e3ccfc9c8aac2"
  },
  {
    "url": "views/qaq/浏览器基础知识.html",
    "revision": "afaafa11ee40d4216054bd3020597576"
  },
  {
    "url": "vuepress/bg.jpg",
    "revision": "fcfbfbd5231c8057d1be4516f10538a2"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "7c42c47152d2fc02b6eb4a2a9fef2eba"
  },
  {
    "url": "vuepress/t0187fcb498f2df273b.jpg",
    "revision": "75e15b2d78d86c72ad97f2dcf5143d02"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
