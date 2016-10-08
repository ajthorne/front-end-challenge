import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import App from './Components/App';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('container'));
