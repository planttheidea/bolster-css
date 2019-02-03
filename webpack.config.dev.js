'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultConfig = require('./webpack.config');
const utils = require('./webpackConfigUtils');

const ADDITIONAL_LOADERS = utils.getAdditionalRules(true);

const PORT = 3000;

module.exports = Object.assign({}, defaultConfig, {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
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

  devtool: '#source-map',

  module: Object.assign({}, defaultConfig.module, {
    rules: defaultConfig.module.rules.concat(ADDITIONAL_LOADERS)
  }),

  output: Object.assign({}, defaultConfig.output, {
    publicPath: `http://localhost:${PORT}/`
  }),

  plugins: defaultConfig.plugins.concat([new HtmlWebpackPlugin()])
});
