const baseConf = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const merge = require('webpack-merge')

const path = require('path')
const resolve = p => path.resolve(__dirname, p)

module.exports = merge(baseConf, {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: resolve('../dist')
  },
  devtool: "source-map",
  devServer: {
    contentBase: resolve('../'),
    port: 5000,
    open: true,
    hot: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
      filename: resolve('../index.html'),
      alwaysWriteToDisk: true,
      hash: true,
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
})

