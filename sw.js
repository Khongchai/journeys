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
    "url": "webpack-runtime-f061d765ba367bf3d212.js"
  },
  {
    "url": "styles.234363e9e523699c3391.css"
  },
  {
    "url": "styles-9411612e31e4f14527d1.js"
  },
  {
    "url": "framework-256fdde5199f9087be1b.js"
  },
  {
    "url": "app-ea4b86f9812d3f82d876.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fbd628553dffdd8ad605874bf6a79d82"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-19245c8506e49b502b12.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "a023ac5257a0f711e098fbb16692d35b"
  },
  {
    "url": "page-data/sq/d/1325267445.json",
    "revision": "6e0a950ea8e515a401ce70e333df46c1"
  },
  {
    "url": "page-data/sq/d/1438308316.json",
    "revision": "02640fbc7c82096fcdaa09f953d1411d"
  },
  {
    "url": "page-data/sq/d/1782643211.json",
    "revision": "51d1a0ada5650e71344bbc5b9b165c6b"
  },
  {
    "url": "page-data/sq/d/271959482.json",
    "revision": "99d530501a05c962c701b9052083ea89"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "fbc059982ada32c5287bad35b4eb8b39"
  },
  {
    "url": "polyfill-058a0cee7fa5777b59c0.js"
  },
  {
    "url": "component---src-templates-blog-template-js-ab4a92aebf6b28328719.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "344ee3cbc765750c0689929d3ad9a938"
  },
  {
    "url": "page-data/analysis/page-data.json",
    "revision": "bbf44c6bbfd37e76a000aefd74a56207"
  },
  {
    "url": "page-data/approach/page-data.json",
    "revision": "df12f9a71d32652eb102e1ce00f2b1ee"
  },
  {
    "url": "page-data/biography/page-data.json",
    "revision": "a95de9f0f4b2488d0aebff3e7fc5a96a"
  },
  {
    "url": "component---src-pages-index-js-49c12f66dcb4ed6aeb15.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d90071c18db85a66c3af5010bf86d832"
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
  if (!resources || !(await caches.match(`/journeys/app-ea4b86f9812d3f82d876.js`))) {
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
