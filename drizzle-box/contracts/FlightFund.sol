pragma solidity ^0.5.0

contract FlightFund {

	var bytes32[] reports;

	// Represents a single validator.
	struct Validator {
		address validator; // validator address
		uint weight; // validator weight
	}

	// represents a report
	struct Report {
		bytes32 reportHash; // hash of report on ipfs
		address creator;
		bool isValid;
		uint8 requiredValidators;
		mapping (address -> uint8) validators;
		mapping (address -> uint8) refutors;
		//address[] validators; // array of validators
		//address[] refuters; // array of refutors
	}

	// mapping of ipfs document to reports
	mapping (bytes32 => Report) reports;

	// Administrator address
	address public chairperson;

	// mapping from addresses to validators
	mapping(address => Validator) public validators;

	// Give `voter` the right to vote on this ballot.
    // May only be called by `chairperson`.
    function certify(address validator) public {
        // check if chairperson is giving right to vote
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to validate."
        );
        require(
            validators[validator] == 0,
            "The voter already validated."
        );
        //require(
        //	validators[validator].weight == 0,
        //	"Validator already validated"
        //);
        // Set weight to 1
        validators[validator].weight = 1;
    }


    // Give `voter` the right to vote on this ballot.
    // May only be called by `chairperson`.
    function revokeCertification(address validator) public {
        // check if chairperson is revoking right to vote
        require(
            msg.sender == chairperson,
            "Only chairperson can revoke certification."
        );
        require(
            validators[validator].validated,
            "This address is not authorized to certify.");
        require(validators[validator].weight == 1);

        delete validators[validator]; // should work, maybe set weight to 0
    }

    // takes in the hash of a document and allows signing
	function validateReport(address addr, bytes32 report) public returns (uint8) {
		require (
			validators[addr] > 0,
			"This address is not authorized to validate");
		require (
			validators[addr].weight > 0 ,
			"Validator not qualified to sign");
		require (
			reports[report] > 0, // might be zero?
			"Report does not exist");
		// store validator address -> weight mapping in report
		reports[report].validators[addr] = validators[addr].weight;
		// return validators length
		return reports[report].validators.length;
	}

	// takes in an address and the hash of a document and adds a dispute to the report
	function disputeReport(address addr, bytes32 report) public returns (uint8) {
		require (
			validators[addr] > 0,
			"This address is not authorized to validate"
			);
		require (
			validators[addr].weight > 0 ,
			"Validator not qualified to sign"
			);
		require (
			reports[report] > 0,
			"Report does not exist"
			);
		// store validator address -> weight mapping in report
		reports[report].refuters[addr] = validators[addr].weight;
		// return validators length
		return reports[report].refuters.length;
	}

	// takes an address, report hash, and bounty and locks
	function createReportRequest(address creator, bytes32 report, uint8 bounty) public returns (bool) {
		// charge bounty
		return false;
	}

	function submitReport(address submittor, bytes32 report) {
		Report newReport;
		newReport.reportHash = report; // hash of report on ipfs
		address creator;
		bool isValid;
		uint8 requiredValidators;
		address[] validators; // array of validators
		address[] refuters; // array of refutors
	}

	// 
	function removeReport(address addr, bytes32 report) public {
		require (
			reports[report] > 0,
			"Invalid report hash"
			);
		require (
			reports[report].creator == addr || addr == chairperson,
			"Only report creator or admin can delete reports"
			);
		// code here
	}

	// pay bounty to report submittor and validators
	function payBounty(address addr, bytes32 report) public {
		// code here
	}
}