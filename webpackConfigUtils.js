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
      loader: 'url?limit=10000&mimetype=application/font-woff',
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/
    }, {
      loader: 'url?limit=10000&mimetype=application/font-woff',
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/
    }, {
      loader: 'url?limit=10000&mimetype=application/octet-stream',
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/
    }, {
      loader: 'file',
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/
    }, {
      loader: 'url?limit=10000&mimetype=image/svg+xml',
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/
    }
  ];
};

module.exports = {
  getAdditionalLoaders
};