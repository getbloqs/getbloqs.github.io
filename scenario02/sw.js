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
    "revision": "6117d62f50067a1c31f3b71f8e47d5a8"
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
    "revision": "7d6d7657348286c0deef516c29c887c5"
  },
  {
    "url": "build/app/bfp6yida.js",
    "revision": "be1071bad05c9302ca5ac29bdcb47a8d"
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
    "url": "build/app/llcl7fma.js",
    "revision": "720d9f92986c724376e275d968129665"
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
    "url": "build/app/xyfissap.js",
    "revision": "25d03519f99399851b14fdc57d211da6"
  },
  {
    "url": "contract.config.json",
    "revision": "7c2d9a7cb4815b256886b6fef6f036e6"
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
    "revision": "f4eb2b71ba4171c4b5213226438cadc2"
  },
  {
    "url": "contracts/MintableToken.json",
    "revision": "45b5f02484e4e12e19bcd3f7f8aa4116"
  },
  {
    "url": "contracts/Ownable.json",
    "revision": "a52430d9bfd5c277562dc9592f160a2a"
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
    "revision": "ec4abfadaf5769a8e5f7bf3586bcfec2"
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
