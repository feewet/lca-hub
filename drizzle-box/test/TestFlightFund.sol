pragma solidity >=0.4.21 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract Test {
    function testItStoresAValue() public {
        SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

        simpleStorage.set(89);

        uint expected = 89;

        Assert.equal(simpleStorage.storedData(), expected, "It should store the value 89.");
    }
}