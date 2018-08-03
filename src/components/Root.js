import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import configStore from '../configStore';
import Home from './Home.js';
import Login from './Login.js';
import Signup from './Signup.js'

const store = configStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Signup} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
      </Provider>
    )
  }
}