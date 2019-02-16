import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu/dist/react-hamburger-menu.min';
import navStyles from './navBar.css';

const navBarClasses = () => `${navStyles.navBar}`;

const titleClasses = () => `${navStyles.Title}`;

const menuContainerClasses = () => `${navStyles.MenuContainer}`;

const menuClasses = () => `${navStyles.Menu}`;

const openMenuClasses = () => `${navStyles.OpenMenu}`;

const linkClasses = () => `${navStyles.Link}`;

const MenuButtons = () => (
  <span className={openMenuClasses()}>
    <Link className={linkClasses()} to="/request">
      Request
    </Link>
  </span>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    const open = false;
    this.state = { open };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { open } = this.state;
    const openedMenu = open ? <MenuButtons /> : <span />;
    return (
      <div className={navBarClasses()}>
        <div className={menuContainerClasses()}>
          <span className={menuClasses()}>
            <HamburgerMenu
              isOpen={open}
              menuClicked={this.handleClick}
              width={18}
              height={15}
              strokeWidth={2.25}
              rotate={0}
              color="whitesmoke"
              borderRadius={0}
              animationDuration={0.5}
            />
          </span>
          {openedMenu}
          <span className={titleClasses()}>LCA Flight</span>
        </div>
      </div>
    );
  }
}

export default NavBar;

NavBar.propTypes = {
  open: PropTypes.bool,
};
