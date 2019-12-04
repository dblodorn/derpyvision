const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FetchJsonWebpackPlugin = require('fetch-json-webpack-plugin')
const common = require('./webpack.common.js')
const {
  htmlOptions
} = require('./build.config.js')

const pathsToClean = [
  './dist'
]

const cleanOptions = {
  exclude: ['_redirects'],
  root: process.cwd(),
  verbose: true,
  dry: false
}

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(
      pathsToClean,
      cleanOptions
    ),
    new FetchJsonWebpackPlugin({
      endpoint: htmlOptions.endpoint,
      filename: 'data',
      hash: true,
    }),
    new CopyWebpackPlugin([
      {
        from: './assets/**/*',
        to: './'
      }
    ])
  ]
})
