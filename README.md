# bolster-css

A modern, modular, flexible, semantic CSS framework.

#### Table of Contents

#### Installation

```
$ npm i bolster-css --save
```

#### Usage

*Webpack / Browserify*

```javascript
// ES2015
import 'bolster/css/bolster.css';

// CommonJS
require('bolster/css/bolster.css');
```

*link tag*

Copy the distributed file to a folder you use:

```
$ cp node_modules/bolster-css/dist/bolster.min.css public/css/bolster.min.css
```

and then reference it in your `<head>`:

```html
<link href="css/bolster.min.css" rel="stylesheet"/>
```

#### Benefits

**Modern**

`bolster` uses the latest styling capabilites to provide a modern layout engine, and with the use of [PostCSS](https://github.com/postcss/postcss) to build the styles you can be assured of compatible support for all modern browsers. This support extends to:
* Chrome
* Firefox
* Opera
* Safari 6.1+
* Edge
* IE10+
* iOS Safari 7.1+
* Android Browser 4.1+
* IE Mobile 10+

**Modular**

While the total filesize of `bolster` once gzipped and minified is only **6.6KB**, you can easily reduce that by only bringing in the specific categories of styling that you want. For example, say you only wanted to bring in our flexible `grid` setup:

```javascript
import 'bolster-css/css/grids.css';
```

Now your project has an even smaller footprint! One thing to note, however, is that the minified version of files are not available directly from the package, so if using a script tag instead of a build process you will need to minify them yourself.

Additionally, you can go one step farther in customization and apply your own custom variables to a variety of settings. The available variables (and their defaults) are:

```scss
// colors
$white: #fff !default;
$black: #000 !default;

$gray-extra-dark: #1f1f1f !default;
$gray-dark: #5d5d5d !default;
$gray-medium: #a0a0a0 !default;
$gray-light: #d5d5d5 !default;
$gray-extra-light: #f1f1f1 !default;

$primary: #1560BD !default;
$info: #0087BD !default;
$danger: #ED2939 !default;
$success: #009150 !default;
$warning: #fff44f !default;

// base sizes
$font-size: 14px !default;

$header-multiplier: 0.35 !default;
$header-base-size: 3.1 !default;

$header-1-size: #{$header-base-size}rem !default;
$header-2-size: #{$header-base-size - ($header-multiplier * 2)}rem !default;
$header-3-size: #{$header-base-size - ($header-multiplier * 3)}rem !default;
$header-4-size: #{$header-base-size - ($header-multiplier * 4)}rem !default;
$header-5-size: #{$header-base-size - ($header-multiplier * 5)}rem !default;
$header-6-size: #{$header-base-size - ($header-multiplier * 6)}rem !default;

$border-radius: 5px !default;

$text-xs-size: 0.7em !default;
$text-sm-size: 0.85em !default;
$text-md-size: 1em !default;
$text-lg-size: 1.15em !default;
$text-xl-size: 1.3em !default;

$number-of-columns: 12;

$tag-xs-size: 0.55rem !default;
$tag-sm-size: 0.7rem !default;
$tag-md-size: 0.85rem !default;
$tag-lg-size: 1rem !default;
$tag-xl-size: 1.15rem !default;

// spacing
$gutter-small: 5px !default;
$gutter-medium: $gutter-small * 2 !default;
$gutter-large: $gutter-small * 3 !default;

$button-xs-spacing: 0.1em 0.2em !default;
$button-sm-spacing: 0.25em 0.5em !default;
$button-md-spacing: 0.5em 1em !default;
$button-lg-spacing: 0.75em 1.5em !default;
$button-xl-spacing: 0.1em 2em !default;

// responsive sizes
$xs-size: 0 !default;
$xs-size-name: xs !default;

$sm-size: 768 !default;
$sm-size-name: sm !default;

$md-size: 1024 !default;
$md-size-name: md !default;

$lg-size: 1200 !default;
$lg-size-name: lg !default;

$xl-size: 1600 !default;
$xl-size-name: xl !default;

$sizes: $xs-size $sm-size $md-size $lg-size $xl-size !default;
$sizeNames: $xs-size-name $sm-size-name $md-size-name $lg-size-name $xl-size-name !default;
```

If you wish to override any of these variables, there are one of two ways you can do it.

*separate file*

The easiest way to override the variables is to create a separate file to set the variables you want to override:

```sass
// my-custom-variables.scss
$xl-size: 1800;
```

and then import the scss files you want from the package:

```sass
// my-styles.scss
@import ('./my-custom-variables.scss');
@import ('~bolster-css/scss/bolster.scss');
```

Note that this is also an easy way to bring in only the scss files you need:

```sass
// my-styles.scss
@import ('./my-custom-variables.scss');
@import ('~bolster-css/scss/normalize.scss');
@import ('~bolster-css/scss/grid.scss');
```

*node-sass*

If using node-sass as part of your build process, you can provide global variables into the sass config and they will be respected by `bolster`. Add a string with the various variables to your `data` property in the `config` file while compiling:

```javascript
sassConfig: {
  data: '$xl-size: 1800;'
}
```

**Flexible**

Styles are set to be as low-specificity as possible, which allows for easy overrides in your own custom styling. No longer will you need to manually trace back the selector for `.nav.navbar ul > li > ul > li:first-child` or anything ... a majority of the selectors in `bolster` are either a single classname or for the element itself, which means adding a single classname will override it (assuming you place `bolster` as the first CSS file imported).

**Semantic**

Classname usage for CSS libraries is common, but `bolster` tries to minimize the noise from "class stuffing" as much as possible. This means elements have default styling (`<button>`, `<input>`, `<table>`, etc.), and that classnames are simple for context-based styling (for example, `primary` class is all that is needed to make a `<button>` styled as a primary button).

The element styling in particular can rub developers the wrong way because the "default styling of the browser is being masked". Technically this is true simply by applying `[normalize.css](https://github.com/necolas/normalize.css/), but the driving force behind this decision is that from a practical application perspective, the overwhelmingly-dominant use-case for using a styling library is that you don't plan to ever show the browser's default styling, instead use that library's styling for that element. As such, why make the developer's life more difficult and the DOM more cluttered than needed?

#### Development

While `bolster` has been tested on a variety of browsers, it is still very much in it's infancy and needs your help! Feel free to contribute fixes and / or enhancements so long as they follow the guiding principles:

* Modern (no IE7 hacks or anything)
* Modularity (all categories are separated into separate files that do not have interdependencies)
* Flexible (low-specificity selectors)
* Semantic (if creating default styling for an element, style the element rather than require an extra classname)

To contribute, clone the repo and `npm i` to get the dependencies. npm scripts available:
* `build-docs` => Compiles the application in `DEV_ONLY` and places the output JS file in the `docs` folder
* `compile-sass` => Compiles the SCSS files into CSS files in the `css` folder, as well as complete files in `dist`
* `compile-for-publish` => runs the `lint`, `compile-sass`, and `build-docs` scripts
* `dev` => runs the webpack dev server for the playground
* `lint` => runs ESLint against files in the `src` folder
* `prepublish` => if in publish, runs `compile-for-publish`

Happy `bolster`ing!
