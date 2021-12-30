/* eslint-disable no-unused-vars */
import getRoutes from './build-scripts/getRoutes'
import getSitemaps from './build-scripts/getSitemaps'
import generateBuildTimestamp from './build-scripts/generateBuildTimestamp'
// import getOfflineAssets from './build-scripts/getOfflineAssets'
import { getJsonLdWebsite } from './utils/jsonld'

const PROD_PATH = 'https://www.baca-quran.id/'
const title =
  "Baca Al-Qur'an dari browser | Baca-Quran.id"
const description = "Ayat-ayat Al-Qur'an beserta terjemahan dan tafsir dari Kemenag, ❌ tanpa ada iklan, ❌ tanpa ada analitik, ✅ gratis sepenuhnya"

const config = {
  env: {
    baseUrl: PROD_PATH,
    envBuildTime: new Date().toISOString()
  },
  buildModules: ['@nuxt/typescript-build'],
  target: 'static',
  router: {
    prefetchLinks: false
  },
  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      // { hid: 'viewport', name: 'viewport', content: 'width=device-width,initial-scale=1' },

      { hid: 'description', name: 'description', content: description },
      { hid: 'theme-color', name: 'theme-color', content: '#f6f7f8' },

      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:image', property: 'og:image', content: '/assets/images/meta-image.png' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: PROD_PATH },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: '/assets/images/meta-image.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:url', name: 'twitter:url', content: PROD_PATH },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@maz_ipan' },

      { hid: 'article:published_time', name: 'article:published_time', content: new Date().toISOString() },
      { hid: 'article:publisher', name: 'article:publisher', content: 'https://www.facebook.com/mazipanneh' },
      { hid: 'article:author', name: 'article:author', content: 'https://www.facebook.com/mazipanneh' },
      { hid: 'article:tag', name: 'article:tag', content: 'quran web' }
    ],
    noscript: [
      {
        innerHTML: 'Baca-Quran.id membutuhkan JavaScript agar berjalan dengan baik.',
        body: true
      }
    ],
    script: [
      {
        hid: 'ld-website',
        innerHTML: JSON.stringify(getJsonLdWebsite()),
        type: 'application/ld+json',
        body: true
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  manifest: {
    name: 'Baca-Quran.id',
    short_name: 'Quran',
    description,
    theme_color: '#f6f7f8',
    background_color: '#f6f7f8',
    lang: 'id',
    display: 'standalone'
  },
  pwa: {
    workbox: {
      cacheNames: {
        prefix: 'bacaquran'
      },
      cleanupOutdatedCaches: true,
      cacheAssets: true,
      runtimeCaching: [
        {
          urlPattern: 'https://www.baca-quran.id/tulisan/.*',
          handler: 'NetworkFirst'
        },
        {
          urlPattern: 'https://www.baca-quran.id/stories/.*',
          handler: 'NetworkFirst'
        },
        {
          urlPattern: 'https://www.baca-quran.id/assets/.*',
          handler: 'CacheFirst',
          strategyOptions: {
            cacheName: 'static-cache'
          },
          strategyPlugins: [{
            use: 'Expiration',
            config: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30
            }
          }]
        }
      ],
      pagesURLPattern: getRoutes()
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#f00',
    height: '3px',
    continuous: true
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/vue-carousel', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '~/modules/ampify',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '~/modules/copyStaticHtml'
  ],

  sitemap: {
    hostname: PROD_PATH,
    cacheTime: 1000 * 60 * 60,
    lastmod: new Date(),
    path: 'sitemaps.xml',
    sitemaps: getSitemaps()
  },
  /*
   ** Generate multiple entry html from 1 to 114
   */
  generate: {
    crawler: false,
    fallback: true,
    concurrency: 50,
    routes: getRoutes()
  },
  /*
   ** Build configuration
   */
  build: {
    parallel: true,
    optimizeCSS: true,
    publicPath: PROD_PATH,
    quiet: false,
    filenames: {
      app: ({ isDev, isModern }) => isDev ? `_nuxt/js/[name]${isModern ? '.modern' : ''}.js` : `_nuxt/js/[contenthash:7]${isModern ? '.modern' : ''}.js`,
      chunk: ({ isDev, isModern }) => isDev ? `_nuxt/js/[name]${isModern ? '.modern' : ''}.js` : `_nuxt/js/[contenthash:7]${isModern ? '.modern' : ''}.js`,
      css: ({ isDev }) => isDev ? '_nuxt/css/[name].css' : '_nuxt/css/[contenthash:7].css',
      img: ({ isDev }) => isDev ? '_nuxt/img/[path][name].[ext]' : '_nuxt/img/[name].[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '_nuxt/fonts/[path][name].[ext]' : '_nuxt/fonts/[name].[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '_nuxt/videos/[path][name].[ext]' : '_nuxt/videos/[name].[contenthash:7].[ext]'
    },
    postcss: {
      preset: {
        autoprefixer: {
          grid: false
        }
      }
    }
  },

  hooks: {
    build: {
      done () {
        generateBuildTimestamp()
      }
    }
  }
}

export default config
