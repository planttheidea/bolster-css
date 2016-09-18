import 'babel-polyfill';

import React, {
  Component,
  PropTypes
} from 'react';
import {
  Link,
  locationShape
} from 'react-router';
import Style, {
  hashKeys
} from 'react-style-tag';

import '../scss/bolster.scss';

import Base from './pages/Base';
import Buttons from './pages/Buttons';
import Forms from './pages/Forms';
import Grids from './pages/Grids';
import Home from './pages/Home';
import Images from './pages/Images';
import Tags from './pages/Tags';
import Menus from './pages/Menus';
import Notifications from './pages/Notifications';
import Tables from './pages/Tables';
import Text from './pages/Text';

import 'raleway-webfont/raleway.css';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

Style.setGlobalOptions({
  hasSourceMap: !IS_PRODUCTION,
  isMinified: IS_PRODUCTION
});

const ROUTES = [
  {
    component: Home,
    text: 'Home',
    to: '/'
  }, {
    component: Base,
    text: 'Base',
    to: '/base'
  }, {
    component: Text,
    text: 'Text',
    to: '/text'
  }, {
    component: Grids,
    text: 'Grids',
    to: '/grids'
  }, {
    component: Buttons,
    text: 'Buttons',
    to: '/buttons'
  }, {
    component: Menus,
    text: 'Menus',
    to: '/menus'
  }, {
    component: Forms,
    text: 'Forms',
    to: '/forms'
  }, {
    component: Tables,
    text: 'Tables',
    to: '/tables'
  }, {
    component: Tags,
    text: 'Tags',
    to: '/tags'
  }, {
    component: Notifications,
    text: 'Notifications',
    to: '/notifications'
  }, {
    component: Images,
    text: 'Images',
    to: '/images'
  }
];

const {
  brand,
  brandLink,
  container,
  content,
  nav
} = hashKeys(['brand', 'brandLink', 'container', 'content', 'nav']);

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: locationShape
  };

  componentDidUpdate({location: previousLocation}) {
    const {
      location
    } = this.props;

    if (location.pathname !== previousLocation.pathname) {
      this.refs.content.scrollTop = 0;
    }
  }

  render() {
    const {
      children,
      location
    } = this.props;

    return (
      <div className={container}>
        <nav className={nav}>
          <ul className="menu vertical full-width">
            {ROUTES.map(({text, to}, linkIndex) => {
              const isActive = location.pathname === to;

              return (
                <li
                  className={`menu-item${isActive ? ' active' : ''}`}
                  key={linkIndex}
                >
                  <Link
                    className="menu-item-link"
                    to={to}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}

            <li className={`menu-brand bottom ${brand}`}>
              <Link
                className={`menu-item-link ${brandLink}`}
                to="/"
              >
                bolster
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`${content} clearfix`}
          ref="content"
        >
          {children}
        </div>

        <Style>{`
          body {
            font-family: Raleway, 'Helvetica Neue', Helvetica, Aria, sans-serif;
          }

          pre {
            background-color: #fff;
          }

          .${container} {
            align-items: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            height: 100vh;
            width: 100vw;
          }

          .${nav} {
            background-color: #1d1d27;
            box-shadow: 0 0 5px #5d5d5d;
            color: #fff;
            flex-basis: auto;
            flex-grow: 0;
            flex-shrink: 0;
            height: 100%;
            z-index: 5;
          }

          .${nav} .menu-item:hover {
            background-color: #5d5d5d;
            color: #fff;
          }

          .${nav} .active,
          .${nav} .active:hover,
          .${nav} .menu-item:active {
            background-color: #c14200;
            color: #f0f0f0;
          }

          .${nav} .active .menu-item-link {
            cursor: default;
          }

          .${content} {
            background-color: #f3f3f6;
            flex-basis: 0;
            flex-grow: 1;
            flex-shrink: 0;
            height: 100%;
            min-width: 0;
            overflow: auto;
            padding: ${location.pathname !== '/' ? '15px' : 0};
          }
        `}</Style>
      </div>
    );
  }
}

export {ROUTES};

export default App;
