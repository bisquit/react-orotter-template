import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Sample from './components/Sample';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/sample" component={Sample} />
  </Router>
  ),
  document.getElementById('app')
);
