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
    "url": "webpack-runtime-c64f42f7b01d2fbdcd36.js"
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
    "url": "app-1dd426b16b0ad340b8c8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "112a63d163f66ce9a8da3da274a9fa42"
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
    "revision": "3c1c9561433f3a69218e7c648eb9e6d9"
  },
  {
    "url": "page-data/sq/d/1782643211.json",
    "revision": "51d1a0ada5650e71344bbc5b9b165c6b"
  },
  {
    "url": "page-data/sq/d/271959482.json",
    "revision": "67956d31c17c82faa0e843e2d91f93b6"
  },
  {
    "url": "page-data/sq/d/3361508366.json",
    "revision": "ecfe616c4eb496286b1f706f0d2cc776"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "46b2ed7bbbc86b90d8d14e431ebe26e3"
  },
  {
    "url": "polyfill-904ff851a679029ed10b.js"
  },
  {
    "url": "component---src-templates-blog-template-js-9f6f2d036f41e93c8f39.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "368d8bee86d1fda9a9a4c76ee175e072"
  },
  {
    "url": "page-data/analysis/page-data.json",
    "revision": "95562cfe72788f7c021aa7be4c80baa4"
  },
  {
    "url": "page-data/approach/page-data.json",
    "revision": "d7f39c51dd462cc79236652036d89a93"
  },
  {
    "url": "page-data/biography/page-data.json",
    "revision": "a5aaa412679b4153ef150e060bf885b4"
  },
  {
    "url": "component---src-pages-credit-tsx-f37507eaa5a96b0ffdb4.js"
  },
  {
    "url": "page-data/credit/page-data.json",
    "revision": "641f74165c0503104c18d97a84ef53a0"
  },
  {
    "url": "component---src-pages-index-js-bae47232543c65ef779d.js"
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
  if (!resources || !(await caches.match(`/journeys/app-1dd426b16b0ad340b8c8.js`))) {
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
