import React from 'react';
import { Style, hashKeys } from 'react-style-tag';

const { content, header, logoContainer, subtitle, title } = hashKeys([
  'content',
  'header',
  'logoContainer',
  'subtitle',
  'title'
]);

const Home = () => {
  return (
    <section>
      <div className={header}>
        <h1 className={title}>bolster</h1>

        <p className={subtitle}>
          A modern, modular, flexible, semantic CSS framework
        </p>
      </div>

      <div className={content}>
        <h2>Getting started</h2>

        <p>To use bolster, install the package from npm:</p>

        <pre>
          <code>$ npm install bolster --save</code>
        </pre>

        <p>
          From there, you can include bolster in your application in any number
          of ways.
        </p>

        <h5>Webpack / Browserify</h5>

        <p>
          With modern build systems, you can simply import the files you want
          (assuming you have set up the correct loaders for the necessary
          files):
        </p>

        <pre>
          <code>
            {`
// if you want to bring in all items
import 'bolster-css/css/bolster.css';

// or if you want to bring in the individual files
import 'bolster-css/css/buttons.css';
import 'bolster-css/css/tables.css';
`.trim()}
          </code>
        </pre>

        <h5>link tag</h5>

        <p>
          If you are including the library statically on the HTML page, just
          copy the distribution files included with the package to your
          project's location and add the tag:
        </p>

        <pre>
          <code>
            {`
// on the command line
$ cp node_modules/bolster/dist/bolster.min.css static/css/bolster.min.css

// then in your HTML file
<link href="css/bolster.min.css" rel="stylesheet"/>
`.trim()}
          </code>
        </pre>

        <h2>Benefits</h2>

        <h5>Modern</h5>

        <p>
          Styles are written with modern CSS in mind, with layouts driven by
          flexbox. All available browser syntaxes are supported through the use
          of PostCSS.
        </p>

        <h5>Modular</h5>

        <p>
          You only use what you need. The entire library is only 6.6KB minified
          and gzipped, but if you only want to use pieces then you can import
          each component type (buttons, forms, grids, etc.) individually.
        </p>

        <h5>Flexible</h5>

        <p>
          All styles are as low-specificity as possible, which means overrides
          of default styles is very easy to do.
        </p>

        <h5>Semantic</h5>

        <p>
          Classes drive many of the styles, but the commonly-used interactive
          elements (buttons, inputs, etc.) have default styling. No cluttering
          of the DOM with a bunch of classes just to provide default styling.
        </p>
      </div>

      <Style>{`
      #app-container .${header} {
        align-items: center;
        background-color: #fff;
        box-shadow: 0 0 5px #777;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-end;
        width: 100%;
        z-index: 1;
      }

      #app-container .${logoContainer} {
        height: auto;
        width: 65%;
      }

      #app-container .${content} {
        padding: 15px;
      }

      #app-container .${title} {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 0;
      }

      #app-container .${subtitle} {
        color: #777;
        font-size: 2rem;
        margin-top: 0;
        text-align: center;
        width: 65%;
      }
      `}</Style>
    </section>
  );
};

export default Home;
