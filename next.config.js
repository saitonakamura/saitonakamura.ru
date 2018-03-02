const webpack = require('webpack')
const withAwesomeTypescript = require('next-awesome-typescript')
const withCss = require('@zeit/next-css')

const isProd = (process.env.NODE_ENV || 'production') === 'production'
const assetPrefix = isProd ? '/saitonakamura.ru' : ''

const typescriptLoaderConfig = {}
const withTypescript = nextJsConfig =>
  withAwesomeTypescript(typescriptLoaderConfig, nextJsConfig)

const webpackEnrich = (config, options) => {
  const { dir, dev } = options

  config.module.rules.push(
    {
      test: /\.svg$/,
      include: [dir],
      loader: '@jonathan.alzetta/react-svg-inline-loader',
    },
    {
      test: /\.(png|jpe?g)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]__[hash].[ext]',
          publicPath: dev ? '/_next/webpack' : '/_next/static',
          outputPath: dev ? undefined : '/static',
        },
      },
    },
    // {
    //   test: /\.(png|jpe?g)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 10 * 1024,
    //     },
    //   },
    // },
    {
      test: /\.(png|jpe?g)$/,
      use: {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: false,
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
        },
      },
      enforce: 'pre',
    },
  )

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
    }),
  )

  return config
}

module.exports = withCss(
  withTypescript({
    assetPrefix,
    exportPathMap: () => ({
      '/': { page: '/' },
    }),
    webpack: webpackEnrich,
    cssModules: true,
  }),
)
