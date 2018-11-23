const pkg = require("./package");

module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { hid: "theme-color", name: "theme-color", content: "#41b883" },
      { hid: "og:image", name: "og:image", content: "/icon.png" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#41b883" },

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
    '@nuxtjs/pwa'
  ],
  /*
   ** Generate multiple entry html from 1 to 114
   */
  generate: {
    routes: () => {
      let res = []
      for(let i=0; i< 114; i++) {
        res.push(`/${i+1}`)
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
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
  }
};
