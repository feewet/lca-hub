import React from 'react';
import LCA from './lca';
import mockLCAs from './mock-lcas';
import LCAStyles from './lca.css';

const rowClasses = () => `${LCAStyles.Row}`;

const titleClasses = () => `${LCAStyles.Title}`;

const LCAItem = addr => (
  <th>
    <LCA address={addr} />
  </th>
);

const LCAs = () => (
  <div>
    <h3 className={titleClasses()}>Unverified</h3>
    <table style={{ width: '100%' }}>
      <tbody>
        <tr className={rowClasses()}>
          {LCAItem(mockLCAs[0].address)}
          {LCAItem(mockLCAs[1].address)}
          {LCAItem(mockLCAs[2].address)}
        </tr>
        <tr />
      </tbody>
    </table>
    <h3 className={titleClasses()}>Verified</h3>
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          {LCAItem(mockLCAs[3].address)}
          {LCAItem(mockLCAs[4].address)}
          {LCAItem(mockLCAs[5].address)}
        </tr>
      </tbody>
    </table>
  </div>
);

export default LCAs;
