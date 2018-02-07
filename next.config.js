const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/saitonakamura.ru' : '',
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  webpack: (config, options) => {
    const { dir, defaultLoaders } = options

    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules.push({
      test: /\.+(ts|tsx)$/,
      include: [dir],
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'awesome-typescript-loader',
          options: {
            transpileOnly: true,
            useTranspileModule: true,
          },
        },
      ],
    })

    return config
  },
}
