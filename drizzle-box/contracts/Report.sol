pragma solidity >=0.4.22 <0.6.0;

/// @title Report with validation
contract ReportSign {

	// mapping to store addresses of verifiers
	mapping(bytes32 => address[]) public validate;
	mapping(bytes32 => address[]) public dispute;

	// takes in the hash of a document and allows
	function sign(bytes32 document) {
		var signatures = validate[document];
		signatures.length +=1;
		signatures[signatures.length-1] = msg.sender;
	}

	// takes in the hash of a document and allows
	function dispute(bytes32 document) {
		var disputes = dispute[document];
		disputes.length +=1;
		disputes[disputes.length-1] = msg.sender;
	}
}