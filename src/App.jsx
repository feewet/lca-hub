import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from 'components/nav-bar';
import LCAs from 'components/lcas';
import LCA from 'components/lca';
import Request from 'components/request';
import Home from 'components/home';
import CreateBounty from 'components/create-bounty';
import { hot } from 'react-hot-loader';
// noinspection ES6UnusedImports eslint-disable-line no-use-before-define
import Style from './styles.css';

const App = () => (
  <div>
    <NavBar open={false} />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/lcas" component={LCAs} />
      <Route path="/request" component-={Request} />
      <Route path="/lca-01" component={LCA} />
      <Route path="/create-bounty" component={CreateBounty} />
    </Switch>
  </div>
);

export default hot(module)(App);
