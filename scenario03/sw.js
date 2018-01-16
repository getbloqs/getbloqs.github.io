importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "914ac4d092a5dacbcc25e743e84c2aa6"
  },
  {
    "url": "build/app/0qpvwtj5.js",
    "revision": "51d8b094b1d052034c29969ba93493e5"
  },
  {
    "url": "build/app/9a6sgbwl.js",
    "revision": "7fe530fa02c47e0e2a719d4142364dc7"
  },
  {
    "url": "build/app/app.0bauncqr.js",
    "revision": "3aa6ebef997a97148cbd54b9a09963e2"
  },
  {
    "url": "build/app/app.annwd7nj.js",
    "revision": "e3bf2fc0f83fbb4142b9a1995e517394"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "48bf709aad33b0f1e2b6f3f55316fa1f"
  },
  {
    "url": "build/app/app.nkkj4nm4.js",
    "revision": "b0377f892e81d9f694671f0290af6160"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "901571a44911dbb5fedc11c6446381e6"
  },
  {
    "url": "build/app/cdtznoou.js",
    "revision": "49fed93f4d7966e40ab9a45960534e8a"
  },
  {
    "url": "build/app/cv7cbtbi.js",
    "revision": "b425d7fba0b1c25730cf13a34af6b556"
  },
  {
    "url": "build/app/orsdhirh.js",
    "revision": "7438a81d2db06c201be7ba516d9071ca"
  },
  {
    "url": "build/app/pbssls7g.js",
    "revision": "bceea4fa858c798bb6fa201033865b51"
  },
  {
    "url": "build/app/q2euhrqq.js",
    "revision": "ffc441a6d80e551589ad18def9bf6896"
  },
  {
    "url": "build/app/rmmvhybl.js",
    "revision": "2d3101c1c91184a6ced0f93c779509ec"
  },
  {
    "url": "build/app/tdicstr8.js",
    "revision": "910d69a41a37db97310089d297fb0b60"
  },
  {
    "url": "build/app/vtax21yh.js",
    "revision": "d50a19a9824a866872f00c935fa7169f"
  },
  {
    "url": "build/app/xyfissap.js",
    "revision": "25d03519f99399851b14fdc57d211da6"
  },
  {
    "url": "build/app/zqpqezuh.js",
    "revision": "ce534508a0439430b5eaa7182357b94f"
  },
  {
    "url": "contract.config.json",
    "revision": "eac7946864b6a36c6b74958a8b045688"
  },
  {
    "url": "contracts/BasicToken.json",
    "revision": "4648eef5568a8f398b5b099431e9d8b9"
  },
  {
    "url": "contracts/ERC20.json",
    "revision": "41f3759b83c77ef26878fe56543d376f"
  },
  {
    "url": "contracts/ERC20Basic.json",
    "revision": "dbe0100bb71655321ece4077be85b104"
  },
  {
    "url": "contracts/ExampleCrowdsale.json",
    "revision": "5c60be1d17bdeb44fed79e257d854155"
  },
  {
    "url": "contracts/ExampleToken.json",
    "revision": "d711a0dde62e8b0c259929f1c1e79634"
  },
  {
    "url": "contracts/Migrations.json",
    "revision": "9eab7848003c501a508130d58cbe7cf1"
  },
  {
    "url": "contracts/MintableToken.json",
    "revision": "45b5f02484e4e12e19bcd3f7f8aa4116"
  },
  {
    "url": "contracts/Ownable.json",
    "revision": "9278076c4e7fd3d2c7cf2b98d0e5ec30"
  },
  {
    "url": "contracts/SafeMath.json",
    "revision": "0941036e4432a8b1c0f5bb5978d016d1"
  },
  {
    "url": "contracts/StandardToken.json",
    "revision": "79bf4ca18670f8dcae49e4620859a19d"
  },
  {
    "url": "index.html",
    "revision": "c508b045408b4120f24f46a23e75778f"
  },
  {
    "url": "manifest.json",
    "revision": "5a359571bffadcd13155e1d9d58ec28c"
  },
  {
    "url": "web3.min.js",
    "revision": "20d2b66d6e1572cdf68e1be6ca9aefab"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
