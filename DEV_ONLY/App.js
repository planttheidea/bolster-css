import 'babel-polyfill';

import React, {
  Component,
  PropTypes
} from 'react';
import {
  render
} from 'react-dom';
import {
  hashHistory,
  Link,
  Route,
  Router
} from 'react-router';
import Style, {
  hashKeys
} from 'react-style-tag';

import '../scss/bolster.scss';

import Base from './pages/Base';
import Buttons from './pages/Buttons';
import Forms from './pages/Forms';
import Grids from './pages/Grids';
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
  content,
  nav
} = hashKeys(['content', 'nav']);

class App extends Component {
  onClickNavLink = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const {
      children,
      location
    } = this.props;

    return (
      <div>
        <div className={`${content} clearfix`}>
          {children}
        </div>

        <header className={nav}>
          <nav>
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
                      onClick={this.onClickNavLink}
                      to={to}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>

        <Style>{`
          .${content} {
            background-color: #f3f3f6;
            min-height: 100vh;
            padding: 0 15px 15px 135px;
          }

          .${nav} {
            background-color: #1d1d27;
            box-shadow: 0 0 5px #5d5d5d;
            color: #fff;
            height: 100vh;
            left: 0;
            position: fixed;
            top: 0;
            width: 120px;
          }

          .${nav} .menu-item:hover {
            background-color: #a0a0a0;
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
        `}</Style>
      </div>
    );
  }
}

export {ROUTES};

export default App;
