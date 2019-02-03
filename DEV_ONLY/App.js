import 'babel-polyfill';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, locationShape } from 'react-router';
import { Style, hashKeys } from 'react-style-tag';

import 'raleway-webfont/raleway.css';
import 'font-awesome/css/font-awesome.css';
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
  },
  {
    component: Base,
    text: 'Base',
    to: '/base'
  },
  {
    component: Text,
    text: 'Text',
    to: '/text'
  },
  {
    component: Grids,
    text: 'Grids',
    to: '/grids'
  },
  {
    component: Buttons,
    text: 'Buttons',
    to: '/buttons'
  },
  {
    component: Menus,
    text: 'Menus',
    to: '/menus'
  },
  {
    component: Forms,
    text: 'Forms',
    to: '/forms'
  },
  {
    component: Tables,
    text: 'Tables',
    to: '/tables'
  },
  {
    component: Tags,
    text: 'Tags',
    to: '/tags'
  },
  {
    component: Notifications,
    text: 'Notifications',
    to: '/notifications'
  },
  {
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
  externals,
  externalsIcon,
  externalsLink,
  hamburger,
  nav,
  navShown
} = hashKeys([
  'brand',
  'brandLink',
  'container',
  'content',
  'externals',
  'hamburger',
  'externalsIcon',
  'externalsLink',
  'nav',
  'navShown'
]);

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: locationShape
  };

  state = {
    menuOpen: false
  };

  componentDidUpdate({ location: previousLocation }) {
    const { location } = this.props;

    if (location.pathname !== previousLocation.pathname) {
      this.refs.content.scrollTop = 0;
    }
  }

  onClickToggleMenu = () => {
    this.setState(({ menuOpen }) => ({
      menuOpen: !menuOpen
    }));
  };

  render() {
    const { children, location } = this.props;
    const { menuOpen } = this.state;

    return (
      <div className={container}>
        <nav className={menuOpen ? `${nav} ${navShown}` : `${nav}`}>
          <div
            className={`xs-only ${hamburger}`}
            onClick={this.onClickToggleMenu}
            role="button"
          >
            <i className="fa fa-bars" />
          </div>

          <ul className="menu vertical full-width">
            {ROUTES.map(({ text, to }, linkIndex) => {
              const isActive = location.pathname === to;

              return (
                <li
                  className={`menu-item${isActive ? ' active' : ''}`}
                  key={linkIndex}
                >
                  <Link className="menu-item-link" to={to}>
                    {text}
                  </Link>
                </li>
              );
            })}

            <li className={`menu-item bottom ${externals}`}>
              <a
                className={externalsLink}
                href="https://github.com/planttheidea/bolster-css"
                rel="nofollow"
                target="_blank"
              >
                <i className={`fa fa-github ${externalsIcon}`} />
                github
              </a>
            </li>

            <li className={`menu-brand ${brand}`}>
              <Link className={`menu-item-link ${brandLink}`} to="/">
                bolster
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`${content} clearfix`} ref="content">
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
            position: relative;
            z-index: 5;
          }

          .${nav} .menu {
            position: relative;
            z-index: 6;
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

          .${hamburger} {
            background-color: #1d1d27;
            box-shadow: 0 0 5px #5d5d5d;
            color: #fff;
            cursor: pointer;
            left: 100%;
            padding: 10px 15px;
            position: absolute;
            top: 0;
            z-index: inherit;
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

          .menu-item.${externals} {
            font-size: 0.85rem;
            padding: 0;
            text-align: center;
          }

          .${externalsLink} {
            color: inherit;
          }

          .${externalsLink}:active,
          .${externalsLink}:focus,
          .${externalsLink}:hover {
            text-decoration: none;
          }

          .${externalsIcon} {
            font-size: 1.5rem;
            margin-right: 5px;
            padding: 5px 0;
          }

          .fa.chevron {
            font-size: 10px;
            vertical-align: middle;
          }

          @media (max-width: 767px) {
            .${nav} {
              bottom: 0;
              left: 0;
              position: fixed;
              top: 0;
              transform: translateX(-100%);
              transition: transform 150ms ease-in-out;
            }

            .${nav}.${navShown} {
              transform: none;
            }
          }
        `}</Style>
      </div>
    );
  }
}

export { ROUTES };

export default App;
