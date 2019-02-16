import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from 'components/nav-bar';
import LCAs from 'components/lcas';
import Request from 'components/request';
import { hot } from 'react-hot-loader';
// noinspection ES6UnusedImports
import Style from './styles.css';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" exact component={LCAs} />
      <Route path="/request" component-={Request} />
    </Switch>
  </div>
);

export default hot(module)(App);
