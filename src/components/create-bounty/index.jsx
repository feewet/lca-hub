import React from 'react';
import createBountyStyles from './create-bounty.css';

const titleClasses = () => `${createBountyStyles.Title}`;

const CreateBounty = () => (
  <div>
    <h2 className={titleClasses()}>Bounty Creation</h2>
  </div>
);

export default CreateBounty;
