const ESLintPlugin = require('eslint-webpack-plugin')

const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx) {
  return {
    supportTS: false,
    boot: [],
    css: ['app.scss'],
    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],
    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'
      chainWebpack(chain) {
        chain
          .plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: ['js', 'vue'] }])
      }
    },
    devServer: {
      server: {
        type: 'http'
      },
      port: 8080,
      open: true // opens browser window automatically
    },
    framework: {
      config: {},
      // Quasar plugins
      plugins: ['Dialog']
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-webpack/developing-ssr/configuring-ssr
    ssr: {
      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      maxAge: 1000 * 60 * 60 * 24 * 30,
      // Tell browser when a file from the server should expire from cache (in ms)

      chainWebpackWebserver(chain) {
        chain
          .plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: ['js'] }])
      },

      middlewares: [
        ctx.prod ? 'compression' : '',
        'render' // keep this as last one
      ]
    },

    // https://v2.quasar.dev/quasar-cli-webpack/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW

      // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
      // if using workbox in InjectManifest mode

      chainWebpackCustomSW(chain) {
        chain
          .plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: ['js'] }])
      },

      manifest: {
        name: `electron app tdp`,
        short_name: `electron app tdp`,
        description: `electron app video player`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'builder', // 'packager' or 'builder'

      packager: {},

      builder: {
        appId: 'media-player-app',
        win: {
          target: {
            target: 'nsis',
            arch: ['x64', 'ia32']
          }
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        }
      },
      chainWebpackMain(chain) {
        chain
          .plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: ['js'] }])
      },

      chainWebpackPreload(chain) {
        chain
          .plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: ['js'] }])
      }
    }
  }
})
