import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import LCAStyle from './lca.css';

const LCAClasses = () => `${LCAStyle.lca}`;

const buttonClasses = () => `${LCAStyle.Button}`;

const statusClasses = () => `${LCAStyle.Status}`;

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
      <div className={LCAClasses()}>
        <Button className={buttonClasses()} style={style()}>
          <div className={statusClasses()} />
          <div>{address}</div>
        </Button>
      </div>
    );
  }
}

export default LCA;

LCA.propTypes = {
  verified: PropTypes.bool,
  address: PropTypes.string.isRequired,
};
