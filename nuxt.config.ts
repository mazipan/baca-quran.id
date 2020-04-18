/* eslint-disable no-unused-vars */
import NuxtConfiguration from '@nuxt/config'
import { Configuration as WebpackConfiguration } from 'webpack'
import getRoutes from './build-scripts/getRoutes';
import getSitemapRoutes from './build-scripts/getSitemapRoutes';
import getOfflineAssets from './build-scripts/getOfflineAssets';

const pkg = require('./package')

const PROD_PATH = 'https://quran-offline.netlify.app/'

const config: NuxtConfiguration = {
  debug: true,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: `Quran Offline | ${pkg.description}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'theme-color', name: 'theme-color', content: '#41b883' },

      { hid: 'og:image', property: 'og:image', content: '/icon.png' },
      { hid: 'og:title', property: 'og:title', content: 'Quran Offline' },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:url', property: 'og:url', content: PROD_PATH },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: '/icon.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Quran Offline' },
      { hid: 'twitter:description', name: 'twitter:description', content: pkg.description },
      { hid: 'twitter:url', name: 'twitter:url', content: PROD_PATH },

      {
        content: 'jW7EK0wGpuReuZkQ-q900J7Z0KbCD9CCAZybfwcPe_U',
        hid: 'google-site-verification',
        name: 'google-site-verification'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }
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
  plugins: [],

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
    extractCSS: true,
    optimizeCSS: true,
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'autoprefixer': true
      },
      preset: {
        autoprefixer: {
          browsers: ['last 2 versions']
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config: WebpackConfiguration, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
