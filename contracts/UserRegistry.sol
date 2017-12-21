pragma solidity ^0.4.18;

import { UserData } from "./UserData.sol";
   
contract UserRegistry {
  string public banner;
  mapping (address => address) private users;

  function UserRegistry(string initialBanner) public {
    banner = initialBanner;
  }

  function getOrRegisterUser() public returns (UserData) {
    if (users[msg.sender] == address(0)) {
      users[msg.sender] = new UserData();
    }
    return UserData(users[msg.sender]);
  }
}
