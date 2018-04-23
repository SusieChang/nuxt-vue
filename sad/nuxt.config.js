module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starmovie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { type:"text/css", rel:"stylesheet", href:"//unpkg.com/bootstrap/dist/css/bootstrap.min.css"},
      // {type:"text/css", rel:"stylesheet", href:"//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"},
    ]
  },
  css: [
    '~/assets/css/base.css'
  ],
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
