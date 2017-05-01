const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'dev'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'gallery.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'dev'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }]
              /*
                modules: false -
                removes unused exports from bundles to bring down the file size
              */
            ]
          }
        }]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
}

module.exports = config
