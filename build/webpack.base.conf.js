const path = require('path')
const resolve = p => path.resolve(__dirname, p)

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /react-icons\/(.)*(.js)$/,
        use: 'babel-loader',
        include: resolve('../node_modules/react-icons')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
}
