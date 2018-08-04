module.exports = {
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'Nuxt Element Apollo Boilerplate',
  },

  css: [
    'element-ui/lib/theme-chalk/display.css',
  ],


  plugins: [
    { src: './plugins/element-ui.js' },
  ],

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          offset: { x: 0, y: 10 },
        };
      }

      if (savedPosition) {
        return savedPosition;
      }

      return { x: 0, y: 0 };
    },
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070',
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        // required
        httpEndpoint: 'http://localhost:4000',
      },
    },
  },
};
