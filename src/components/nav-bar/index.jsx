import React from 'react';
import navStyles from './navBar.css';

const navBarClasses = () => `${navStyles.navBar}`;

const titleClasses = () => `${navStyles.Title}`;

const navBar = () => (
  <div className={navBarClasses()}>
    <div>
      <span className={titleClasses()}>LCA Flight</span>
    </div>
  </div>
);

export default navBar;
