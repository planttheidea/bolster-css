'use strict';

const path = require('path');
const webpack = require('webpack');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

module.exports = {
  entry: [path.resolve(__dirname, 'DEV_ONLY', 'index.js')],

  mode: 'development',

  module: {
    rules: [
      {
        enforce: 'pre',
        include: [path.resolve(__dirname, 'DEV_ONLY')],
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
          emitError: true,
          failOnError: true,
          failOnWarning: false,
          formatter: eslintFriendlyFormatter
        },
        test: /\.js$/
      },
      {
        include: [path.resolve(__dirname, 'DEV_ONLY')],
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  output: {
    filename: 'bolster.js',
    library: 'bolster',
    path: path.resolve(__dirname, 'docs')
  },

  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])]
};
