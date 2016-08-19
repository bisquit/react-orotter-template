import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Sample from './components/Sample';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// Check if user had logged in, or transition to login page
function requireLogin(nextState, replace) {
  // TODO: Implements auth
  if (true) {
    replace('/login');
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} onEnter={requireLogin} />
    <Route path="/login" component={Login} />
    <Route path="/sample" component={Sample} />
  </Router>
  ),
  document.getElementById('app')
);
