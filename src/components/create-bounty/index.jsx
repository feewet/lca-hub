import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import createBountyStyles from './create-bounty.css';

const createBountyClasses = () => `${createBountyStyles.CreateBounty}`;

const titleClasses = () => `${createBountyStyles.Title}`;

const subtitleClasses = () => `${createBountyStyles.Subtitle}`;

const summaryClasses = () => `${createBountyStyles.TitleInput}`;

let lca = {
  goal: 'No goal',
  scope: 'No scope',
  reward: 'No reward',
  difficulty: 'No difficulty',
};

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
          id="goal"
          className={createBountyStyles.GoalInput}
          type="text"
          name="name"
        />
      </div>
    </form>
    <p style={{ marginTop: '2.5rem' }}>
      This is a summary of your LCA. It should tell contributors the general
      problem, goal of the project, the industry of interest, and maybe a fourth
      thing.
    </p>
    <Button
      style={{ marginTop: '1.5rem' }}
      className={createBountyStyles.Button}
      onClick={progress}
    >
      Next: Define Scope
    </Button>
  </div>
);

const CBStageTwo = ({ progress }) => (
  <div className={createBountyClasses()}>
    <h1 className={titleClasses()}>Definition</h1>
    <hr />
    <form>
      <div style={{ marginTop: '2rem' }}>Scope&nbsp;&nbsp;</div>
      <div>
        <input
          id="scope"
          className={createBountyStyles.ScopeInput}
          type="text"
          name="name"
        />
      </div>
    </form>
    <p style={{ marginTop: '2rem' }}>
      This is a detailed description of your LCA requirements. It should note
      the required deliverables, specify variables, define project scope, etc
      etc etc.
    </p>
    <Button
      style={{ marginTop: '1.5rem' }}
      className={createBountyStyles.Button}
      onClick={progress}
    >
      Next: Set Reward
    </Button>
  </div>
);

class DifficultySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { selected: 0 };
  }

  handleChange(s) {
    switch (s) {
      case 1:
        lca.difficulty = 'Basic';
        break;
      case 2:
        lca.difficulty = 'Moderate';
        break;
      case 3:
        lca.difficulty = 'More Difficult';
        break;
      default:
        break;
    }
    this.setState({ selected: s });
  }

  render() {
    const { selected } = this.state;
    const c1 = selected === 1 ? '#3d9b34' : 'whitesmoke';
    const c2 = selected === 2 ? '#3d9b34' : 'whitesmoke';
    const c3 = selected === 3 ? '#3d9b34' : 'whitesmoke';
    return (
      <div>
        <Button
          className={createBountyStyles.DifficultyButton}
          style={{ backgroundColor: c1 }}
          onClick={() => this.handleChange(1)}
        >
          Basic
        </Button>
        <Button
          className={createBountyStyles.DifficultyButton}
          style={{ backgroundColor: c2 }}
          onClick={() => this.handleChange(2)}
        >
          Moderate
        </Button>
        <Button
          className={createBountyStyles.DifficultyButton}
          style={{ backgroundColor: c3 }}
          onClick={() => this.handleChange(3)}
        >
          More Difficult
        </Button>
      </div>
    );
  }
}

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
          id="reward"
          className={createBountyStyles.AmountInput}
          type="text"
          name="name"
        />
      </div>
    </form>
    <div style={{ marginTop: '2rem' }}>
      <span>Difficulty&nbsp;&nbsp;</span>
      <DifficultySelector />
    </div>
    <p style={{ marginTop: '2rem' }}>
      Please note that due to the fluctuating cost of gas fees on the Ethereum
      network that the amount of deposited DAI will exceed the value of the
      reward. Any excess DAI will be returned to your wallet once the
      transaction is confirmed.
    </p>
    <Button
      style={{ marginTop: '1.25rem' }}
      className={createBountyStyles.Button}
      onClick={progress}
    >
      Next: Finalize
    </Button>
  </div>
);

const CBStageFour = () => (
  <div className={createBountyClasses()}>
    <h1 className={titleClasses()}>Preview</h1>
    <hr />
    <h2>Goal</h2>
    <p>{lca.goal}</p>
    <hr />
    <h2>Scope</h2>
    <p>{lca.scope}</p>
    <hr />
    <h2>Reward</h2>
    <p>{lca.reward}</p>
    <hr />
    <h2>Difficulty</h2>
    <p>{lca.difficulty}</p>
    <hr />
    <Link to="/" className={createBountyStyles.Link}>
      Create LCA
    </Link>
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
        return (
          <CBStageOne
            progress={() => {
              lca.goal = document.getElementById('goal').value;
              this.handleProgress();
            }}
          />
        );
      case 2:
        return (
          <CBStageTwo
            progress={() => {
              lca.scope = document.getElementById('scope').value;
              this.handleProgress();
            }}
          />
        );
      case 3:
        return (
          <CBStageThree
            progress={() => {
              lca.reward = document.getElementById('reward').value;
              this.handleProgress();
            }}
          />
        );
      case 4:
        return <CBStageFour progress={this.handleProgress} />;
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

CBStageFour.propTypes = {
  progress: PropTypes.func,
};

DifficultySelector.propTypes = {
  selected: PropTypes.number,
};
