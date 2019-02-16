import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LCA from './lca';
import mockLCAs from './mock-lcas';
import LCAStyles from './lca.css';

const LCAsClasses = () => `${LCAStyles.LCAs}`;

const rowClasses = () => `${LCAStyles.Row}`;

const titleClasses = () => `${LCAStyles.Title}`;

const LCAItem = (addr, v) => <LCA address={addr} verified={v} />;

const LCAs = () => (
  <div className={LCAsClasses()}>
    <h3 className={titleClasses()}>Unverified</h3>
    <hr />
    <Row className={rowClasses()}>
      <Col xs={3}>
        {LCAItem(mockLCAs[0].address, mockLCAs[0].verified)}
        {LCAItem(mockLCAs[1].address, mockLCAs[1].verified)}
        {LCAItem(mockLCAs[2].address, mockLCAs[2].verified)}
      </Col>
    </Row>
    <h3 className={titleClasses()}>Verified</h3>
    <hr />
    <Row className={rowClasses()}>
      <Col>
        {LCAItem(mockLCAs[3].address, mockLCAs[3].verified)}
        {LCAItem(mockLCAs[4].address, mockLCAs[4].verified)}
        {LCAItem(mockLCAs[5].address, mockLCAs[5].verified)}
      </Col>
    </Row>
  </div>
);

export default LCAs;
