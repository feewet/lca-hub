import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LCAs from 'components/lcas';
import NavBar from 'components/nav-bar';
import { hot } from 'react-hot-loader';
// noinspection ES6UnusedImports
import Style from '../src/styles.css';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" exact component={LCAs} />
    </Switch>
  </div>
);

export default hot(module)(App);
