'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultConfig = require('./webpack.config');
const utils = require('./webpackConfigUtils');

const ADDITIONAL_LOADERS = utils.getAdditionalLoaders(true);

const PORT = 3000;

module.exports = Object.assign({}, defaultConfig, {
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

  module: Object.assign({}, defaultConfig.module, {
    loaders: defaultConfig.module.loaders.concat(ADDITIONAL_LOADERS)
  }),

  output: Object.assign({}, defaultConfig.output, {
    publicPath: `http://localhost:${PORT}/`
  }),

  plugins: defaultConfig.plugins.concat([
    new HtmlWebpackPlugin()
  ])
});