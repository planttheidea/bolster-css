'use strict';

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');

const getAdditionalRules = (isDev) => {
  return [
    {
      include: [
        path.resolve(__dirname, 'scss'),
        path.resolve(__dirname, 'DEV_ONLY')
      ],
      test: /\.scss/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: !!isDev
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [isDev ? autoprefixer() : cssnano()]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'node_modules')],
            sourceMap: !!isDev
          }
        }
      ]
    },
    {
      include: [path.resolve(__dirname, 'node_modules')],
      test: /\.css/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: !!isDev
          }
        }
      ]
    },
    {
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/font-woff'
      },
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/
    },
    {
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/font-woff'
      },
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/
    },
    {
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'application/octet-stream'
      },
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/
    },
    {
      loader: 'file-loader',
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/
    },
    {
      loader: 'url-loader',
      options: {
        limit: 10000,
        mimetype: 'image/svg+xml'
      },
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/
    }
  ];
};

module.exports = {
  getAdditionalRules
};
