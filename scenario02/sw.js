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
    "revision": "4dfb01474b3afe9172c1d230e18421c7"
  },
  {
    "url": "build/app/4t0g4mnn.js",
    "revision": "f8583b8280a080636e157debd56cb187"
  },
  {
    "url": "build/app/80dno5y5.js",
    "revision": "56aecd326436d14d41e6ea89a8f1b412"
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
    "revision": "944cc7b4728b988ce19475c7217f5037"
  },
  {
    "url": "build/app/cv7cbtbi.js",
    "revision": "b425d7fba0b1c25730cf13a34af6b556"
  },
  {
    "url": "build/app/fagvodze.js",
    "revision": "a0dd285329b19699ca60d9eb72b0dea3"
  },
  {
    "url": "build/app/frfldqir.js",
    "revision": "b7ec77d6f77dfce3cdc7a66b50d6f6c3"
  },
  {
    "url": "build/app/j2cp7nqt.js",
    "revision": "7682694bf50c64455a96d372ba21d940"
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
    "url": "build/app/sgso1dvz.js",
    "revision": "4420d3207552d3293110bbb4c89b8144"
  },
  {
    "url": "build/app/smri1fjg.js",
    "revision": "8a7b0fb9c230fefb5c8967324a0b2df3"
  },
  {
    "url": "build/app/vd6cff7y.js",
    "revision": "dac2da98e92e960f225a320e80c09ed9"
  },
  {
    "url": "build/app/xyfissap.js",
    "revision": "25d03519f99399851b14fdc57d211da6"
  },
  {
    "url": "contract.config.json",
    "revision": "ae23daedc4ac1757253db25fcbc786ff"
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
    "revision": "444e428e2828e9c5b28f837e7b41e17c"
  },
  {
    "url": "contracts/MintableToken.json",
    "revision": "45b5f02484e4e12e19bcd3f7f8aa4116"
  },
  {
    "url": "contracts/Ownable.json",
    "revision": "7873b1f827326236360dad5b44abce6d"
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
    "url": "contracts/SubdomainRedirect.json",
    "revision": "40207f44e115441321c09783534f1e74"
  },
  {
    "url": "index.html",
    "revision": "54393eaaa4e9f965d2913b4d714eb8a8"
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
