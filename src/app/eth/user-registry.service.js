import contract from 'truffle-contract';
import { Injectable } from '../../ng-annotations';
import { Web3Service } from './web3.service';
import UserRegistry from '../../../build/contracts/UserRegistry.json';

export class UserRegistryService extends Injectable([Web3Service]) {

  constructor(web3Service) {
    super();
    this._contract = web3Service.provider.then(provider => {
      let userRegistry = contract(UserRegistry);
      userRegistry.setProvider(provider);
      return userRegistry.deployed();
    });

    this.address = this._contract.then(inst => inst.address);
  }

  banner() {
    return this._contract.then(inst => inst.banner());
  }

  userHasRegistered(userAddress) {
    return this._contract.then(inst => inst.userHasRegistered({from: userAddress}));
  }

  registerUser(userAddress) {
    return this._contract.then(inst => inst.registerUser({from: userAddress, gas: 300000}));
  }

  user(userAddress) {
    return this._contract.then(inst => inst.users(userAddress));
  }
}
