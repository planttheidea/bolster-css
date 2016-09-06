'use strict';

const fs = require('fs');
const path = require('path');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mkdirp = require('mkdirp');
const postcss = require('postcss');
const sass = require('node-sass');

const SRC_DIRECTORY = path.resolve(__dirname, 'scss');
const LIB_DIRECTORY = path.resolve(__dirname, 'css');
const DIST_DIRECTORY = path.resolve(__dirname, 'dist');
const NODE_MODULES_DIRECTORY = path.resolve(__dirname, 'node_modules');

const MAIN_FILE = 'bolster.scss';
const NORMALIZE_CSS_FILE = 'normalize.css';
const NORMALIZE_SCSS_FILE = 'normalize.scss';

const stripExtension = (filename) => {
  return filename.split('.')[0];
};

const ensureFolderExists = (folder) => {
  return new Promise((resolve, reject) => {
    mkdirp(folder, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    })
  });
};

const compileSassFiles = () => {
  return new Promise((resolve, reject) => {
    const srcFilePath = path.join(NODE_MODULES_DIRECTORY, NORMALIZE_CSS_FILE, NORMALIZE_CSS_FILE);
    const destFilePath = path.join(SRC_DIRECTORY, NORMALIZE_SCSS_FILE);

    const normalizeStream = fs
      .createReadStream(srcFilePath)
      .pipe(fs.createWriteStream(destFilePath));

    normalizeStream.on('finish', () => {
      fs.readdir(SRC_DIRECTORY, (error, files) => {
        if (error) {
          return reject(error);
        }

        files.forEach((file) => {
          const fullFilePath = path.join(SRC_DIRECTORY, file);

          sass.render({
            file: fullFilePath,
            includePaths: [
              'node_modules/'
            ],
            sourceMap: true
          }, (renderError, result) => {
            if (renderError) {
              reject(renderError);
            }

            const css = result.css;
            const libFilePath = path.join(LIB_DIRECTORY, `${stripExtension(file)}.css`);
            const distFilePath = path.join(DIST_DIRECTORY, `${stripExtension(file)}.css`);
            const distMapFilePath = path.join(DIST_DIRECTORY, `${stripExtension(file)}.map.css`);
            const distMinifiedFilePath = path.join(DIST_DIRECTORY, `${stripExtension(file)}.min.css`);

            postcss([
              autoprefixer
            ])
              .process(css)
              .then((result) => {
                fs.writeFileSync(libFilePath, result.css);
              });

            if (file === MAIN_FILE) {
              postcss([
                autoprefixer
              ])
                .process(css)
                .then((result) => {
                  fs.writeFileSync(distFilePath, result.css);
                  fs.writeFileSync(distMapFilePath, result.map);
                });

              postcss([
                autoprefixer,
                cssnano
              ])
                .process(css)
                .then((result) => {
                  fs.writeFileSync(distMinifiedFilePath, result.css);
                });
            }
          });
        });

        resolve();
      });
    });
  });
};

const libDirectory = ensureFolderExists(LIB_DIRECTORY);
const distDirectory = ensureFolderExists(DIST_DIRECTORY);

Promise.all([libDirectory, distDirectory])
  .then(compileSassFiles)
  .catch((error) => {
    throw error;
  })
  .then(() => {
    console.log('Compilation of styles complete.');
  });
