import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu/dist/react-hamburger-menu.min';
import navStyles from './navBar.css';
import styles from '../../styles.css';

const navBarClasses = () => `${navStyles.navBar} ${styles.LCAGreenBackground}`;

const titleClasses = () => `${navStyles.Title}`;

const menuContainerClasses = () => `${navStyles.MenuContainer}`;

const menuClasses = () => `${navStyles.Menu}`;

const openMenuClasses = () => `${navStyles.OpenMenu}`;

const linkClasses = () => `${navStyles.Link} ${styles.LCAGreen}`;

const MenuButtons = () => (
  <span className={openMenuClasses()}>
    <Link className={linkClasses()} to="/create-bounty">
      Create Bounty
    </Link>
  </span>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    const { open } = props;
    this.state = { open };
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    const openedMenu = open ? <MenuButtons /> : <span />;
    return (
      <div className={navBarClasses()}>
        <div
          className={menuContainerClasses()}
          style={{ marginBottom: '2rem' }}
        >
          <span className={menuClasses()}>
            <HamburgerMenu
              isOpen={open}
              menuClicked={this.onHandleClick}
              width={18}
              height={15}
              strokeWidth={2.25}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </span>
          {openedMenu}
          <span className={titleClasses()}>LCA Flight</span>
        </div>
        <hr />
      </div>
    );
  }
}

export default NavBar;

NavBar.propTypes = {
  open: PropTypes.bool,
};
