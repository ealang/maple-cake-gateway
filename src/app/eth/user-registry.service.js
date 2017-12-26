import { Service } from '../../ng-annotations';
import contract from 'truffle-contract';
import UserRegistry from '../../../build/contracts/UserRegistry.json';
import { Web3Service } from './web3.service';

export class UserRegistryService extends Service {

  static get parameters() {
    return [[Web3Service]];
  }

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
    return this._contract.userHasRegistered(userAddress);
  }
}
