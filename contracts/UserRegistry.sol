pragma solidity ^0.4.18;

import { UserData } from "./UserData.sol";

contract UserRegistry {
  string public banner;
  mapping (address => address) public users;

  function UserRegistry(string initialBanner) public {
    banner = initialBanner;
  }

  function registerUser() public returns (address) {
    require(msg.sender != address(0));
    address userData = new UserData(msg.sender);
    users[msg.sender] = userData;
    return userData;
  }

  function userHasRegistered() public view returns (bool) {
    return users[msg.sender] != address(0);
  }
}
