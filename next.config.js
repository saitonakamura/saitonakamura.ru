const webpack = require('webpack')
const withAwesomeTypescript = require('next-awesome-typescript')
const withCss = require('@zeit/next-css')

const isProd = (process.env.NODE_ENV || 'production') === 'production'
const assetPrefix = isProd ? '/saitonakamura.ru' : ''

const typescriptLoaderConfig = {}
const withTypescript = nextJsConfig =>
  withAwesomeTypescript(typescriptLoaderConfig, nextJsConfig)

module.exports = withCss(
  withTypescript({
    assetPrefix,
    exportPathMap: () => ({
      '/': { page: '/' },
    }),
    webpack: config => {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
        }),
      )

      return config
    },
    cssModules: true,
  }),
)
