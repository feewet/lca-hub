import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homeStyles from './home.css';

const paragraphClasses = () => `${homeStyles.Paragraph}`;

const headingClasses = () => `${homeStyles.Heading}`;

const linkClasses = () => `${homeStyles.Link}`;

const Home = () => (
  <div>
    <Row>
      <Col xs={12}>
        <h2 className={headingClasses()}>Create LCA Bounties</h2>
        <h2 className={headingClasses()}>Solve Problems & Get Paid</h2>
        <p className={paragraphClasses()}>
          A Life Cycle Assessment quantifies the environmental impact of a
          product or service. Organizations use LCAs to inform decisions
          regarding sustainability and implementation of sustainable policies.
          The current system to create LCAs is heavily centralized. Both
          organizations and engineers can benefit greatly from a direct system
          to draft and verify life cycle assessments. Currently, engineers must
          work through a third party such as a government or corporation in
          order to complete these reports. By removing the middle men,
          assessments can be done significantly faster at lower cost.
        </p>
        <Link
          className={linkClasses()}
          style={{ left: '29%' }}
          to="/create-bounty"
        >
          Create Bounty
        </Link>
        <Link className={linkClasses()} style={{ left: '48%' }} to="/lcas">
          View Bounties
        </Link>
      </Col>
    </Row>
  </div>
);

export default Home;
