module.exports = function override(config, env) {
    config.module.rules.push({
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' }
      })
    config.output.push({
      crossOriginLoading: 'anonymous',
    })
    return config;
  }

// 11월 17일 개봉