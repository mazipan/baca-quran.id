import locale from './locale/id'

const pkg = require('./package')
const path = require('path')

const getOfflineAssets = () => {
  let res = [
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
  for (let i = 0; i < 114; i++) {
    res.push(`/data/surah/${i + 1}.json`)
  }
  return res
}

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: `Quran Offline | ${pkg.description}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#41b883' },

      { property: 'og:image', content: '/icon.png' },
      { property: 'og:title', content: 'Quran Offline' },
      { property: 'og:description', content: pkg.description },
      { property: 'og:url', content: 'https://quran-offline.netlify.com/' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:src', content: '/icon.png' },
      { name: 'twitter:title', content: 'Quran Offline' },
      { name: 'twitter:description', content: pkg.description },
      { name: 'twitter:url', content: 'https://quran-offline.netlify.com/' }
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
  loading: { color: '#41b883' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      locales: ['id'],
      defaultLocale: 'id',
      vueI18n: {
        fallbackLocale: 'id',
        messages: {
          id: locale
        }
      }
    }]
  ],
  /*
   ** Generate multiple entry html from 1 to 114
   */
  generate: {
    routes: () => {
      let res = []
      for (let i = 0; i < 114; i++) {
        res.push(`/${i + 1}`)
      }
      return res
    }
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
    extend (config, ctx) {
      // Run ESLint on save
      config.resolve.alias['icons'] = path.resolve(__dirname, 'node_modules/vue-ionicons/dist')
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
