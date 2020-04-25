/* eslint-disable no-unused-vars */
import getRoutes from './build-scripts/getRoutes'
import getSitemapRoutes from './build-scripts/getSitemapRoutes'
import getOfflineAssets from './build-scripts/getOfflineAssets'

const pkg = require('./package')

const PROD_PATH = 'https://quran-offline.netlify.app/'

const config = {
  buildModules: ['@nuxt/typescript-build'],
  debug: true,
  mode: 'universal',
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: `Quran Offline | ${pkg.description}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'theme-color', name: 'theme-color', content: '#f6f7f8' },

      { hid: 'og:image', property: 'og:image', content: '/star-logo-color.png' },
      { hid: 'og:title', property: 'og:title', content: 'Quran Offline' },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:url', property: 'og:url', content: PROD_PATH },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: '/star-logo-color.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Quran Offline' },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description },
      { hid: 'twitter:url', name: 'twitter:url', content: PROD_PATH },

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
    ]
  },
  manifest: {
    name: 'Quran Offline',
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
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    routes: getSitemapRoutes()
  },
  /*
   ** Generate multiple entry html from 1 to 114
   */
  generate: {
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
  }
}

export default config
