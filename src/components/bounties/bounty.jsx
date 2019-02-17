import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import LCAStyle from './bounty.css';

const buttonClasses = () => `${LCAStyle.Button}`;

const statusClasses = v =>
  v ? `${LCAStyle.StatusVerified}` : `${LCAStyle.StatusUnverified}`;

class Bounty extends React.Component {
  constructor(props) {
    super(props);
    const { verified, address, owner, timeEstimate } = props;
    this.state = { verified, address, owner, timeEstimate };
  }

  render() {
    const { verified, address, owner, timeEstimate } = this.state;
    return (
      <Button className={buttonClasses()}>
        <div className={statusClasses(verified)}>&nbsp;</div>
        <div>{address}</div>
        <div>{owner}</div>
        <div>{timeEstimate}</div>
      </Button>
    );
  }
}

export default Bounty;

Bounty.propTypes = {
  verified: PropTypes.bool,
  address: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  timeEstimate: PropTypes.string.isRequired,
};
