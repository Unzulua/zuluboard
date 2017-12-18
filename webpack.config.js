var path = require('path');

module.exports = {
  entry: {
    application: './src/main/webapp/application.js',
    dashboard: './src/main/webapp/dashboard/index.js'
  },
  output: {
    path: path.join(__dirname, 'grails-app/assets/javascripts'),
    publicPath: '/assets/',
    filename: 'bundle-[name].js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'url?limit=10000&prefix=assets/!img'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js',
    }
  },
};
