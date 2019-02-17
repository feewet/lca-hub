import React from "react";

class CreateReportBounty extends React.Component {
  state = { stackId: null};
  
  createReportBounty = (hash, numValidators, bounty) => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.FlightFund;
    
    const stackId = contract.methods["createReportBounty"].cacheSend("aozNR7DZHQK1ZcU9p7QdrshMvXqWK6gpu5rmrkPdT3L4", 2, 10000, {
      from: drizzleState.accounts[0]
    });
    // save the `stackId` for later reference
    this.setState({ stackId });
  };

getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    console.log(this.props)
    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];
    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;
    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txHash].status}`;
  };

render() {
  return (
      <div>
      <button onClick={this.createReportBounty()}></button>
      Transaction Status:
      <div>{this.getTxStatus()}</div>
      </div>
    );
  }
}
export default CreateReportBounty;