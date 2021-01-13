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
    "url": "webpack-runtime-988faf1a73d56df5b260.js"
  },
  {
    "url": "styles.c8c37f74b4783fa38427.css"
  },
  {
    "url": "styles-8fab2804fb6f85b824b6.js"
  },
  {
    "url": "framework-d066f55745d479a55fde.js"
  },
  {
    "url": "app-c04bb6de8451c445f41e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bee7a43a3834b64c76131cb9007b0498"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-19245c8506e49b502b12.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d2dacdcbf92ed8eacb2cc0731e3d9362"
  },
  {
    "url": "page-data/sq/d/1325267445.json",
    "revision": "6e0a950ea8e515a401ce70e333df46c1"
  },
  {
    "url": "page-data/sq/d/1782643211.json",
    "revision": "51d1a0ada5650e71344bbc5b9b165c6b"
  },
  {
    "url": "page-data/sq/d/271959482.json",
    "revision": "4dae4547bc00a13cc84a5e3b15a5182e"
  },
  {
    "url": "page-data/sq/d/3361508366.json",
    "revision": "ecfe616c4eb496286b1f706f0d2cc776"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "0d54e76de6781121360af1e9a928e47a"
  },
  {
    "url": "polyfill-904ff851a679029ed10b.js"
  },
  {
    "url": "component---src-templates-blog-template-js-6843a4777ac045412e85.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "368d8bee86d1fda9a9a4c76ee175e072"
  },
  {
    "url": "page-data/analysis/page-data.json",
    "revision": "2ddbebc97f74fe1d736929c944862e9f"
  },
  {
    "url": "page-data/approach/page-data.json",
    "revision": "eef87c76f719e2de25aa04ff56e66e56"
  },
  {
    "url": "page-data/biography/page-data.json",
    "revision": "a5aaa412679b4153ef150e060bf885b4"
  },
  {
    "url": "component---src-pages-credit-tsx-777be3d5a06a8410c137.js"
  },
  {
    "url": "page-data/credit/page-data.json",
    "revision": "641f74165c0503104c18d97a84ef53a0"
  },
  {
    "url": "component---src-pages-index-js-66ba0ba54a4c33fad830.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "150038deca4b3acda81f389d50999ca2"
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
  if (!resources || !(await caches.match(`/journeys/app-c04bb6de8451c445f41e.js`))) {
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
