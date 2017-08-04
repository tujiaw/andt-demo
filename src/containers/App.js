import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import history from '../utils/history'
import Login from './Login'
import Home from './Home'
import NotFound from './404'

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/monitor" component={Home} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    );
  }
}

export default App;
