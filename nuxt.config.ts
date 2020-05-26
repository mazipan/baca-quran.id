/* eslint-disable no-unused-vars */
import getRoutes from './build-scripts/getRoutes'
import getSitemaps from './build-scripts/getSitemaps'
import getOfflineAssets from './build-scripts/getOfflineAssets'
import { getJsonLdWebsite } from './utils/jsonld'

const PROD_PATH = 'https://www.baca-quran.id/'
const title =
  "Baca Al-Qur'an dimana saja, langsung dari web browser Anda | Qur'an Web"
const description = "Baca ayat-ayat Al-Qur'an beserta terjemahan dan tafsir dimana saja, langsung dari web browser Anda, tanpa iklan, tanpa analitik, gratis sepenuhnya"

const config = {
  env: {
    baseUrl: PROD_PATH,
    envBuildTime: new Date().toISOString()
  },
  buildModules: ['@nuxt/typescript-build'],
  debug: true,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'follow,index' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'theme-color', name: 'theme-color', content: '#f6f7f8' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Qur\'an Web' },
      { hid: 'og:image', property: 'og:image', content: '/meta-image.png' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:url', property: 'og:url', content: PROD_PATH },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: '/meta-image.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:url', name: 'twitter:url', content: PROD_PATH },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@maz_ipan' },

      { hid: 'article:published_time', name: 'article:published_time', content: new Date().toISOString() },
      { hid: 'article:publisher', name: 'article:publisher', content: 'https://www.facebook.com/mazipanneh' },
      { hid: 'article:author', name: 'article:author', content: 'https://www.facebook.com/mazipanneh' },
      { hid: 'article:tag', name: 'article:tag', content: 'quran web' },
      {
        content: '25fxaXcctkaxC3eyPtDYikfEMRCaJE_kQI8d43rvgbA',
        hid: 'google-site-verification',
        name: 'google-site-verification'
      }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ],
    script: [
      {
        id: 'ld-website',
        innerHTML: JSON.stringify(getJsonLdWebsite()),
        type: 'application/ld+json',
        body: true
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  manifest: {
    name: 'Quran Web',
    short_name: 'Quran'
  },
  workbox: {
    offlineAssets: getOfflineAssets()
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
    gzip: true,
    path: 'sitemaps.xml',
    sitemaps: getSitemaps(),
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  /*
   ** Generate multiple entry html from 1 to 114
   */
  generate: {
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
    postcss: {
      plugins: {
        autoprefixer: true
      }
    }
  }
}

export default config
