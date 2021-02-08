module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  },
}
