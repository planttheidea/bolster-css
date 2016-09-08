'use strict';

const webpack = require('webpack');

const defaultConfig = require('./webpack.config');
const utils = require('./webpackConfigUtils');

const ADDITIONAL_LOADERS = utils.getAdditionalLoaders(false);

module.exports = Object.assign({}, defaultConfig, {
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },

  module: Object.assign({}, defaultConfig.module, {
    loaders: defaultConfig.module.loaders.concat(ADDITIONAL_LOADERS)
  }),

  output: Object.assign({}, defaultConfig.output, {
    filename: 'bolster.min.js',
    libraryTarget: 'var'
  }),

  plugins: defaultConfig.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        booleans:true,
        conditionals:true,
        drop_console:true,
        drop_debugger:true,
        join_vars:true,
        screw_ie8:true,
        sequences:true,
        warnings:false
      },
      mangle:true,
      sourceMap:false
    })
  ])
});