var path = require('path');

module.exports = {
  entry: {
    index: './src/main/webapp/index.js',
    hello: './src/main/webapp/hello/index.js'
  },
  output: {
    path: path.join(__dirname, 'grails-app/assets/javascripts'),
    publicPath: '/assets/',
    filename: 'bundle-[name].js'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   include: path.join(__dirname, 'src/main/webapp/**'),
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [["es2015", { "modules": false }]]
      //     }
      //   }
      // },
      {
        test: /\.css$/,
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
