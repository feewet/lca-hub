import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import LCAs from 'components/lcas';
import NavBar from 'components/nav-bar';
import { hot } from 'react-hot-loader';

const App = () => (
  <div>
    <NavBar />
    <LCAs />
  </div>
);

export default hot(module)(App);
