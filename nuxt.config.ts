/* eslint-disable no-unused-vars */
import NuxtConfiguration from '@nuxt/config'
import {
  Configuration as WebpackConfiguration
} from 'webpack'

const SurahConstant = require('./constant/surah')
const pkg = require('./package')

const PROD_PATH = 'https://www.quran-offline.xyz/'

const getOfflineAssets = (): string[] => {
  const res: string[] = [
    '/favicon.ico',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/favicon-96x96.png',
    '/icon-192x192.png',
    '/icon-nosquare.png',
    '/icon-nosquare50.png',
    '/icon.png',
    '/data/surah-info.json'
  ]
  for (let i = 1; i < 115; i++) {
    res.push(`/data/surah/${i}.json`)
  }
  return res
}

const routes = (): string[] => {
  const res: string[] = [
    '/',
    '/about',
    '/all-surah',
    '/asmaul-husna',
    '/ayat-kursi',
    '/daily-doa',
    '/favorite',
    '/last-verse',
    '/recommendation',
    '/settings'
  ]
  for (let i = 1; i < 115; i++) {
    res.push(`/${i}`)
    const surahObj = SurahConstant.find(item => item.index === i)
    if (surahObj) {
      for (let j = 1; j < surahObj.ayah_count + 1; j++) {
        // res.push(`/${i}/${j}`)
      }
    }
  }
  return res
}
interface sitemap {
    url: string,
    changefreq: string,
    priority: number,
    lastmodISO: string
}

const routesSitemap = (): sitemap[] => {
  const res: sitemap[] = []
  routes().forEach((el) => {
    const item: sitemap = {
      url: el,
      changefreq: 'daily',
      priority: 1,
      lastmodISO: String(new Date().toISOString())
    }
    res.push(item)
  })
  return res
}

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

      { hid: 'google-site-verification', name: 'google-site-verification', content: 'jW7EK0wGpuReuZkQ-q900J7Z0KbCD9CCAZybfwcPe_U' }
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
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://quran-offline.netlify.com/',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    exclude: [],
    routes: routesSitemap()
  },
  /*
   ** Generate multiple entry html from 1 to 114
   */
  generate: {
    routes: routes()
  },
  /*
   ** Build configuration
   */
  build: {
    parallel: true,
    // extractCSS: true,
    // optimizeCSS: true,
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ],
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
