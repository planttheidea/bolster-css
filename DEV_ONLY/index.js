import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';
import App, { ROUTES } from './App';

const div = document.createElement('div');

div.id = 'app-container';

render(
  <Router history={hashHistory}>
    <Route component={App} path="/">
      {ROUTES.map(({ component, to }, routeIndex) => {
        if (to === '/') {
          return (
            <IndexRoute component={component} key={`route-${routeIndex}`} />
          );
        }

        return (
          <Route component={component} key={`route-${routeIndex}`} path={to} />
        );
      })}
    </Route>
  </Router>,
  div
);

document.body.appendChild(div);
