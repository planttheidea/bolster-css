'use strict';

const path = require('path');
const webpack = require('webpack');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

const autoprefixer = require('autoprefixer');

const PORT = 3000;

module.exports = {
  entry: [
    path.resolve(__dirname, 'DEV_ONLY', 'index.js')
  ],

  eslint: {
    configFile: '.eslintrc',
    emitError: true,
    failOnError: true,
    failOnWarning: false,
    formatter: eslintFriendlyFormatter
  },

  module: {
    preLoaders: [
      {
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'eslint-loader',
        test: /\.js$/
      }
    ],

    loaders: [
      {
        loader: 'json',
        test: /\.json$/
      }, {
        include: [
          path.resolve(__dirname, 'scss'),
          path.resolve(__dirname, 'DEV_ONLY')
        ],
        loader: 'babel',
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

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ],

  postcss() {
    return [
      autoprefixer
    ]
  },

  resolve: {
    extensions: [
      '',
      '.js'
    ],

    root: __dirname
  },

  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'node_modules')
    ],
    sourceMap: true
  }
};