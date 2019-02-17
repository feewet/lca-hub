pragma solidity ^0.5.0;

contract FlightFund {

	event Certify(address validator);
	event RevokeCertification(address validator);
	event ValidateReport(address validator, bytes32 report);
	event DisputeReport(address validator, bytes32 report);
	event CreateReportBounty();
	event SubmitReport();
	event RemoveReport(address addr, bytes32 report);
	event SetBounty();
	event PayBounty(address addr, address[] validators, bytes32 report);

	// Represents a single validator.
	struct Validator {
		address validator; // validator address
		uint weight; // validator weight
	}

	// Report Structure
	struct Report {
		bytes32 reportHash; // hash of report on ipfs
		address creator; // creator (owner)
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

	// Give `voter` the right to vote on this ballot.
    // May only be called by `chairperson`.
    function certify(address validator) public onlyChairperson() {
		require(validators[validator] == 0, "This address is already validated.");
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
	function validateReport(address addr, bytes32 report) public 
		onlyValidator(addr)
		reportExists(report)
	{
		uint size = reports[report].validators.length;
		// store validator address -> weight mapping in report
		reports[report].validators[size] = validators[size].weight;
		// return validators length
		emit ValidateReport(addr, report);
	}

	// takes in an address and the hash of a document and adds a dispute to the report
	function disputeReport(address addr, bytes32 report) public 
		onlyValidator(addr)
		reportExists(report)
	{
		uint size = reports[report].validators.length;
		// store validator address -> weight mapping in report
		reports[report].refuters[size] = validators[size].weight;
		emit DisputeReport(addr, report);
	}

	// takes an address, report hash, and bounty and locks (permissionless)
	function createReportBounty(address creator, bytes32 report, uint8 bounty) public {
		// lock bounty in smart contract
		
	}

	// Submit a report (permissionless)
	function submitReport(address submittor, bytes32 reportHash, uint8 _numRequiredValidators) public {
		bytes32 reportHash = reportHash;
		address creator = submittor;
		bool isValid = false;
		uint8 numRequiredValidators = _numRequiredValidators;
		reports[reportHash] = Report(reportHash, creator, isValid, numRequiredValidators);
		emit SubmitReport(reportHash, creator, isValid, numRequiredValidators);
	}

	// Remove report and release bounty
	function removeReport(address addr, bytes32 report) public {
		require (reports[report].creator == addr || addr == chairperson,
			"Only report creator or admin can delete reports");
		delete reports[report];
		// !!!!! RELEASE BOUNTY !!!!!!
		emit RemoveReport(addr, report);
	}

	// pay bounty to report submittor and validators
	function payBounty(address addr, bytes32 report) public {
		require(reports[report].isValid == false, "Report already valid");
		//for (reports[report].validators;

		// !!! PAY BOUNTY !!!
		reports[report].isValid = true;
		emit PayBounty(addr, reports[report].validators, report);
	}

	// only Chairperson
	modifier onlyChairperson() {
		require(msg.sender == chairperson, 
			"Only chairperson can give right to validate.");
		_;
	}

	modifier onlyValidator(uint8 addr) {
		require(validators[addr] > 0, "This address is not authorized to validate");
		require(validators[addr].weight > 0, "Validator not qualified to sign");
		_;
	}

	modifier reportExists(bytes32 report) {
		require (reports[report] > 0, "Invalid report hash");
		_;
	}
}