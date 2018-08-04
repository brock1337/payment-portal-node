const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const config = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/dev-server', /^lodash/]
  })],
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: [ '@babel/preset-env' ],
        //     plugins: ['@babel/plugin-transform-runtime']
        //   }
        // }
      },
      {
        test: /test\.js$/,
        exclude: /node_modules/,
        use: 'mocha-loader'
      },
      // {
      //   test: /\.node$/,
      //   exclude: /node_modules/,
      //   use: 'node-loader'
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MinifyPlugin({}, {
      test: /\.js($|\?)/,
      exclude: /node_modules/
    })
  ]
}

module.exports = config
