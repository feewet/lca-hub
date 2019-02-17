import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import createBountyStyles from './create-bounty.css';

const createBountyClasses = () => `${createBountyStyles.CreateBounty}`;

const titleClasses = () => `${createBountyStyles.Title}`;

const subtitleClasses = () => `${createBountyStyles.Subtitle}`;

const summaryClasses = () => `${createBountyStyles.TitleInput}`;

// TODO: use this method...
// <ReactSVG src="../../../resources/progress1.svg" />

const CBStageOne = ({ progress }) => (
  <div className={createBountyClasses()}>
    <h1 className={titleClasses()}>Bounty Creation</h1>
    <hr />
    <div>
      <h2 className={subtitleClasses()}>Summary</h2>
    </div>
    <form>
      <div>Title&nbsp;&nbsp;</div>
      <div>
        <input className={summaryClasses()} type="text" name="name" />
      </div>
    </form>
    <form className={createBountyStyles.Form}>
      <div>Goal&nbsp;&nbsp;</div>
      <div>
        <input
          className={createBountyStyles.GoalInput}
          type="text"
          name="name"
        />
      </div>
    </form>
    <p>
      This is a summary of your LCA. It should tell contributors the general
      problem, goal of the project, the industry of interest, and maybe a fourth
      thing.
    </p>
    <Button className={createBountyStyles.Button} onClick={progress}>
      Next: Define Scope
    </Button>
  </div>
);

const CBStageTwo = ({ progress }) => (
  <div className={createBountyClasses()}>
    <h1 className={titleClasses()}>Definition</h1>
    <hr />
    <form>
      <div>Scope&nbsp;&nbsp;</div>
      <div>
        <input
          className={createBountyStyles.ScopeInput}
          type="text"
          name="name"
        />
      </div>
    </form>
    <p>
      This is a detailed description of your LCA requirements. It should note
      the required deliverables, specify variables, define project scope, etc
      etc etc.
    </p>
    <Button className={createBountyStyles.Button} onClick={progress}>
      Next: Set Reward
    </Button>
  </div>
);

const CBStageThree = ({ progress }) => (
  <div className={createBountyClasses()}>
    <h1 className={titleClasses()}>Reward</h1>
    <hr />
    <p>
      Set the payout for full completion of the bounty, as specified by the
      scope.
    </p>
    <form>
      <div style={{ marginTop: '2rem' }}>Amount (DAI)&nbsp;&nbsp;</div>
      <div>
        <input
          className={createBountyStyles.AmountInput}
          type="text"
          name="name"
        />
      </div>
    </form>
    <Button className={createBountyStyles.Button} onClick={progress}>
      Next: Finalize
    </Button>
  </div>
);

class CreateBounty extends React.Component {
  constructor(props) {
    super(props);
    this.handleProgress = this.handleProgress.bind(this);
    this.state = { stage: 1 };
  }

  handleProgress() {
    const { stage } = this.state;
    this.setState({ stage: stage + 1 });
  }

  render() {
    const { stage } = this.state;
    switch (stage) {
      case 1:
        return <CBStageOne progress={this.handleProgress} />;
      case 2:
        return <CBStageTwo progress={this.handleProgress} />;
      case 3:
        return <CBStageThree progress={this.handleProgress} />;
      default:
        return <div />;
    }
  }
}

export default CreateBounty;

CreateBounty.propTypes = {
  stage: PropTypes.number,
};

CBStageOne.propTypes = {
  progress: PropTypes.func,
};

CBStageTwo.propTypes = {
  progress: PropTypes.func,
};

CBStageThree.propTypes = {
  progress: PropTypes.func,
};
