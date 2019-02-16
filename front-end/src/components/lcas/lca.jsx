import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import LCAStyle from './lca.css';

const LCAStyles = () => `${LCAStyle.lca}`;

class LCA extends React.Component {
  constructor(props) {
    super(props);
    const { verified, address } = props;
    this.state = { verified, address };
  }

  render() {
    const { verified, address } = this.state;
    const color = verified ? 'green' : 'red';
    const style = () => ({ color });
    return (
      <div className={LCAStyles()}>
        <Button style={style()}>{address}</Button>
      </div>
    );
  }
}

export default LCA;

LCA.propTypes = {
  verified: PropTypes.bool,
  address: PropTypes.string.isRequired,
};
