module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
    return config;
  }