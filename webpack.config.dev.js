const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

const autoprefixer = require('autoprefixer');

const PORT = 3000;

module.exports = {
  cache: true,

  debug: true,

  devServer: {
    contentBase: './dist',
    host: 'localhost',
    inline: true,
    lazy: false,
    noInfo: false,
    quiet: false,
    port: PORT,
    stats: {
      colors: true,
      progress: true
    }
  },

  devtool: 'eval-cheap-module-source-map',

  entry: [
    path.resolve(__dirname, 'DEV_ONLY', 'App.js')
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
      }, {
        include: [
          path.resolve(__dirname, 'scss'),
          path.resolve(__dirname, 'DEV_ONLY')
        ],
        loaders: [
          'style',
          'css?sourceMap',
          'postcss',
          'sass'
        ],
        test: /\.scss/
      }, {
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loaders: [
          'style',
          'css?sourceMap'
        ],
        test: /\.css/
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  output: {
    filename: 'deedy.js',
    library: 'deedy',
    path: path.resolve(__dirname, 'dist'),
    publicPath: `http://localhost:${PORT}/`,
    umdNamedDefine: true
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new HtmlWebpackPlugin()
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