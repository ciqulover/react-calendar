const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const path = require('path')
const resolve = p => path.resolve(__dirname, p)
module.exports = merge(baseConf, {
  entry: './src/Calendar.tsx',
  output: {
    filename: 'index.js',
    path: resolve('../lib'),
    library: 'ciqu-react-calendar',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'moment': {
      root: 'moment',
      commonjs2: 'moment',
      commonjs: 'moment',
      amd: 'moment'
    }
  }
})
