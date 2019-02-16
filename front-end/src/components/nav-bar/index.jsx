import React from 'react';
import navStyles from './navBar.css';

const navBarStyle = () => `${navStyles.navBar}`;

const navBar = () => (
  <div className={navBarStyle()}>
    <span>LCA Sound System</span>
  </div>
);

export default navBar;