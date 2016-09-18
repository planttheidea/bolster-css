'use strict';

const path = require('path');

const getAdditionalLoaders = (isDev) => {
  const sourceMapString = isDev ? '?sourceMap' : '';

  return [
    {
      include: [
        path.resolve(__dirname, 'scss'),
        path.resolve(__dirname, 'DEV_ONLY')
      ],
      loaders: [
        'style',
        `css${sourceMapString}`,
        'postcss',
        `sass${sourceMapString}`
      ],
      test: /\.scss/
    }, {
      include: [
        path.resolve(__dirname, 'node_modules')
      ],
      loaders: [
        'style',
        `css${sourceMapString}`
      ],
      test: /\.css/
    }, {
      loader: 'url?limit=65000&mimetype=image/svg+xml&name=[hash].[ext]',
      test: /\.svg$/
    }, {
      loader: 'url?limit=65000&mimetype=application/font-woff&name=[hash].[ext]',
      test: /\.woff$/
    }, {
      loader: 'url?limit=65000&mimetype=application/font-woff2&name=[hash].[ext]',
      test: /\.woff2$/
    }, {
      loader: 'url?limit=65000&mimetype=application/octet-stream&name=[hash].[ext]',
      test: /\.[ot]tf$/
    }, {
      loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=[hash].[ext]',
      test: /\.eot$/
    }
  ];
};

module.exports = {
  getAdditionalLoaders
};