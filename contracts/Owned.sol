pragma solidity ^0.4.18;

contract Owned {
  address public owner;

  function Owned(address _owner) public {
    owner = _owner;
  }

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }
}
