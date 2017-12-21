pragma solidity ^0.4.18;

import { Owned } from "./Owned.sol";

contract UserData is Owned { 
  bytes32[] private documents;

  function numDocuments() public view returns (uint) {
    return documents.length;
  }

  function appendDocument(bytes32 doc) public onlyOwner {
    documents.push(doc);
  }

  function getDocument(uint i) public view returns (bytes32) {
    return documents[i];
  }
}
