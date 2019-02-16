import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from 'react-hamburger-menu/dist/react-hamburger-menu.min';
import navStyles from './navBar.css';

const navBarClasses = () => `${navStyles.navBar}`;

const titleClasses = () => `${navStyles.Title}`;

const menuClasses = () => `${navStyles.Menu}`;

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
    return (
      <div className={navBarClasses()}>
        <div className={menuClasses()}>
          <span>
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
          <span className={titleClasses()}>LCA Flight</span>
        </div>
      </div>
    );
  }
}

//           <span className={titleClasses()}>LCA Flight</span>

export default NavBar;

NavBar.propTypes = {
  open: PropTypes.bool,
};
