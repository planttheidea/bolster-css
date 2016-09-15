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
    }
  ];
};

module.exports = {
  getAdditionalLoaders
};