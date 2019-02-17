import React from 'react';
import { Document, Page } from 'react-pdf';
import { Button } from 'react-bootstrap';
import LCAStyle from './lca.css';

const LCA = () => (
  <div className={LCAStyle.LCA}>
    <h1>Sample LCA</h1>
    <hr />
    <Document file="./lca.pdf">
      <Page pageNumber={1} />
    </Document>
    <Button className={LCAStyle.Button}>Verify</Button>
  </div>
);

export default LCA;
