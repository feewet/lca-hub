import React from 'react';
import LCA from './lca';
import mockLCAs from './mock-lcas';

const LCAs = () => (
  <table style={{ width: '100%' }}>
    <tbody>
      <tr>
        <th>
          <LCA address={mockLCAs[0].address} />
        </th>
        <th>
          <LCA address={mockLCAs[1].address} />
        </th>
      </tr>
      <tr />
    </tbody>
  </table>
);

export default LCAs;
