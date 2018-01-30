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
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.common.js',
    }
  },
};
