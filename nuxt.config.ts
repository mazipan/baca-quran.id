/* eslint-disable no-unused-vars */
import getRoutes from './build-scripts/getRoutes'
import getSitemaps from './build-scripts/getSitemaps'
import getOfflineAssets from './build-scripts/getOfflineAssets'
import copyVerse from './build-scripts/copyVerse'
import { getJsonLdWebsite } from './utils/jsonld'

const PROD_PATH = 'https://quran-offline.netlify.app/'
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
  // typescript: {
  //   typeCheck: {
  //     eslint: true
  //   }
  // },
  /*
   ** Headers of the page
   */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'index' },
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
        content: 'MJwW1iWLvaJ05N5rHDWpEqSQEjeXmHbbwFR-bk6E4vc',
        hid: 'google-site-verification',
        name: 'google-site-verification'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/star-logo-color-32.png' },
      { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/star-logo-color-64.png' }
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
    // '@/plugins/composition-api'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/sitemap'],

  sitemap: {
    hostname: PROD_PATH,
    cacheTime: 1000 * 60 * 60,
    lastmod: new Date(),
    gzip: true,
    path: 'sitemap.xml',
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
    interval: 1000,
    concurrency: 50,
    routes: getRoutes()
  },
  /*
   ** Build configuration
   */
  build: {
    parallel: true,
    // extractCSS: true,
    optimizeCSS: true,
    postcss: {
      plugins: {
        autoprefixer: true
      }
    }
    /*
     ** You can extend webpack config here
     */
    // extend (config: WebpackConfiguration, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  hooks: {
    generate: {
      done () {
        copyVerse()
      }
    }
  }
}

export default config
