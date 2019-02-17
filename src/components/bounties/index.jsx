import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Bounty from './bounty';
import mockLCAs from './mock-lcas';
import LCAStyles from './bounty.css';

const LCAsClasses = () => `${LCAStyles.LCAs}`;

const rowClasses = () => `${LCAStyles.Row}`;

const titleClasses = () => `${LCAStyles.Title}`;

const LCAItem = i => {
  const lca = mockLCAs[i];
  return (
    <Bounty
      address={lca.address}
      verified={lca.verified}
      owner={lca.owner}
      timeEstimate={lca.timeEstimate}
    />
  );
};

const LCAs = () => (
  <div className={LCAsClasses()}>
    <h3 className={titleClasses()}>Unvalidated</h3>
    <hr />
    <Row className={rowClasses()}>
      <Col xs={3}>
        {LCAItem(0)}
        {LCAItem(1)}
        {LCAItem(2)}
      </Col>
    </Row>
    <h3 className={titleClasses()}>Validated</h3>
    <hr />
    <Row className={rowClasses()}>
      <Col xs={3}>
        {LCAItem(3)}
        {LCAItem(4)}
        {LCAItem(5)}
      </Col>
    </Row>
  </div>
);

export default LCAs;
