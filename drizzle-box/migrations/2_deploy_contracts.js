const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const ComplexStorage = artifacts.require("ComplexStorage");
const FlightFund = artifacts.require("FlightFund");

module.exports = function(deployer) {
  deployer.deploy(FlightFund)
};
