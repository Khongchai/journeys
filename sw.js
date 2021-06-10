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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-147f56e209f754ff5bdb.js"
  },
  {
    "url": "styles.852dd62a8a059cff2451.css"
  },
  {
    "url": "styles-bc72ca78f9bad9fb1f45.js"
  },
  {
    "url": "framework-83e11af5cf111be5ad89.js"
  },
  {
    "url": "925e0f50-92068d60ac9062b92595.js"
  },
  {
    "url": "app-e2cc5612662411313414.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2f1b4e92123f128cb1d0e083fa472f1b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-16703ee5599528db9f93.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "927f1bd37cd8656f643c33924da97b32"
  },
  {
    "url": "page-data/sq/d/271959482.json",
    "revision": "97eee30293fde817eb64aa8f056e3806"
  },
  {
    "url": "page-data/sq/d/3361508366.json",
    "revision": "ecfe616c4eb496286b1f706f0d2cc776"
  },
  {
    "url": "page-data/sq/d/777127769.json",
    "revision": "3e7ef32d8005d62813036a07799b72d5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "4b8b7138a52d95007e86ad03ff5be7db"
  },
  {
    "url": "polyfill-0d026d1f75aedaa2b363.js"
  },
  {
    "url": "component---src-templates-blog-template-js-23626f5e4092b94ba064.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "6dc15199e3892d08faab517dead8fba6"
  },
  {
    "url": "page-data/analysis/page-data.json",
    "revision": "50a76623c56c8d5a932c789cd31e0d78"
  },
  {
    "url": "page-data/biography/page-data.json",
    "revision": "ed923a09fbd0e3f2c0564fc55022e27d"
  },
  {
    "url": "component---src-pages-credit-tsx-6faff8ff96439b6ad6cd.js"
  },
  {
    "url": "page-data/credit/page-data.json",
    "revision": "0a23f7cefd0b3300089fb7035826bea7"
  },
  {
    "url": "component---src-pages-index-js-50dd7f44a17aa86a8d70.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0d8e66865331f6fc2360b7b299ab3282"
  },
  {
    "url": "page-data/result/page-data.json",
    "revision": "ed579ae1c44f61e35123d096e778dbed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/journeys`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/journeys/app-e2cc5612662411313414.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/journeys/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
