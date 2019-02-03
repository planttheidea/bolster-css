'use strict';

const defaultConfig = require('./webpack.config');
const utils = require('./webpackConfigUtils');

const ADDITIONAL_LOADERS = utils.getAdditionalRules(false);

module.exports = Object.assign({}, defaultConfig, {
  externals: ['react', 'react-dom', 'react-router'],

  module: Object.assign({}, defaultConfig.module, {
    rules: defaultConfig.module.rules.concat(ADDITIONAL_LOADERS)
  }),

  output: Object.assign({}, defaultConfig.output, {
    filename: 'bolster.min.js',
    libraryTarget: 'var'
  })
});
