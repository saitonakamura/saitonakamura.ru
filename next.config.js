const withAwesomeTypescript = require('next-awesome-typescript')
const withCss = require('@zeit/next-css')

const debug = process.env.NODE_ENV !== 'production'

module.exports = withCss(
  Object.assign(
    withAwesomeTypescript(
      {},
      {
        assetPrefix: !debug ? '/saitonakamura.ru' : '',
        exportPathMap: () => ({
          '/': { page: '/' },
        }),
      },
    ),
    {
      cssModules: true,
    },
  ),
)
