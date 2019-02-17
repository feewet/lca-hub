pragma solidity ^0.5.0;

contract FlightFund {

	event Certify(address validator);
	event RevokeCertification(address validator);
	event ValidateReport(address validator, bytes32 reportHash);
	event DisputeReport(address validator, bytes32 reportHash);
	event CreateReportBounty();
	event SubmitReport(address submittor, bytes32 reportHash);
	event RemoveReport(address addr, bytes32 reportHash);
	event SetBounty();
	event PayBounty(address addr, address[] validators, bytes32 reportHash);

	// Represents a single validator.
	struct Validator {
		address addr; // validator address
		uint weight; // validator weight
	}

	// Report Structure
	struct Report {
		// ------ADD NAME------
		address payable creator; // creator (owner)
		bytes32 reportHash; // hash of report on ipfs
		uint256 bounty;
		bool isSubmitted;
		bool isValid;
		uint8 numRequiredValidators;
		address[] validators;
		address[] refuters;
	}

	// mapping of ipfs document to reports
	mapping (bytes32 => Report) reports;

	// Administrator address
	address public chairperson;

	// mapping from addresses to validators
	mapping(address => Validator) public validators;

	// only Chairperson access
	modifier onlyChairperson() {
		require(msg.sender == chairperson, 
			"Only chairperson can give right to validate.");
		_;
	}

	// ensures only validators can access
	modifier onlyValidator(address addr) {
		require(validators[addr].addr != address(0x0), "This address is not authorized to validate");
		require(validators[addr].weight > 0, "Validator not qualified to sign");
		_;
	}

	// Ensures report exists
	modifier reportExists(bytes32 reportHash) {
		require (reports[reportHash].reportHash != bytes32(0x0), "Invalid report hash");
		_;
	}

	// Ensures no double signing
	modifier notSigned(address addr, bytes32 reportHash) {
		_;
	}

	// Give `voter` the right to vote on this ballot.
    // May only be called by `chairperson`.
    function certify(address validator) public onlyChairperson() {
		//require(validators[validator] == address(0x0), "This address is already validated.");
        validators[validator].weight = 1;
        emit Certify(validator);
    }

    // Give `voter` the right to vote on this ballot.
    // May only be called by `chairperson`.
    function revokeCertification(address validator) public onlyChairperson() {
        require(validators[validator].weight == 1); // validatorExists

        delete validators[validator]; // should work, maybe set weight to 0
        emit RevokeCertification(validator);
    }

    // takes in the hash of a document and allows signing
	function validateReport(bytes32 reportHash) public
		onlyValidator(msg.sender)
		reportExists(reportHash)
	{
		uint256 size = reports[reportHash].validators.length;
		// store validator address -> weight mapping in report
		reports[reportHash].validators[size] = msg.sender;
		// return validators length
		emit ValidateReport(msg.sender, reportHash);
	}

	// takes in an address and the hash of a document and adds a dispute to the report
	function disputeReport(bytes32 reportHash) public
		onlyValidator(msg.sender)
		reportExists(reportHash)
		notSigned(msg.sender, reportHash)
	{
		uint256 size = reports[reportHash].validators.length;
		// store validator address -> weight mapping in report
		reports[reportHash].refuters[size] = msg.sender;
		emit DisputeReport(msg.sender, reportHash);
	}

	// takes an address, report hash, and bounty and locks (permissionless)
	function createReportBounty(bytes32 reportHash, uint8 numRequiredValidators) public payable {
		require (reports[reportHash].reportHash == bytes32(0x0), "Report already submitted");
		reports[reportHash] = Report(msg.sender, reportHash, msg.value, false, false,
			numRequiredValidators, new address[](8), new address[](8));
		//emit CreateReportBounty
	}

	// Submit a report (permissionless)
	function submitReport(bytes32 reportHash) public reportExists(reportHash) {
		reports[reportHash].reportHash = reportHash;
		reports[reportHash].isSubmitted = true;
		emit SubmitReport(msg.sender, reportHash);
	}

	// Remove report and release bounty
	function removeReport(bytes32 reportHash) public {
		require (reports[reportHash].creator == msg.sender || msg.sender == chairperson,
			"Only report creator or admin can delete reports");
		// RELEASE BOUNTY
		reports[reportHash].creator.transfer(reports[reportHash].bounty);
		delete reports[reportHash];
		emit RemoveReport(msg.sender, reportHash);
	}
}