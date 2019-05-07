const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    // default in folder dist
    filename: 'main.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: { fix: true }
        }
      }

    ]
  }
}
