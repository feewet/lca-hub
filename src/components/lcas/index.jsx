import React from 'react';
import LCA from './lca';
import mockLCAs from './mock-lcas';
import LCAStyles from './lca.css';

const rowClasses = () => `${LCAStyles.Row}`;

const titleClasses = () => `${LCAStyles.Title}`;

const LCAItem = (addr, v) => (
  <th>
    <LCA address={addr} verified={v} />
  </th>
);

const LCAs = () => (
  <div>
    <h3 className={titleClasses()}>Unverified</h3>
    <table style={{ width: '100%' }}>
      <tbody>
        <tr className={rowClasses()}>
          {LCAItem(mockLCAs[0].address, mockLCAs[0].verified)}
          {LCAItem(mockLCAs[1].address, mockLCAs[1].verified)}
          {LCAItem(mockLCAs[2].address, mockLCAs[2].verified)}
        </tr>
        <tr />
      </tbody>
    </table>
    <h3 className={titleClasses()}>Verified</h3>
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          {LCAItem(mockLCAs[3].address, mockLCAs[3].verified)}
          {LCAItem(mockLCAs[4].address, mockLCAs[4].verified)}
          {LCAItem(mockLCAs[5].address, mockLCAs[5].verified)}
        </tr>
      </tbody>
    </table>
  </div>
);

export default LCAs;
