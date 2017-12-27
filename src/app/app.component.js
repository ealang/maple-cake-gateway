import { UserRegistryService } from './eth/user-registry.service';
import { Web3Service } from './eth/web3.service';
import { Component } from '../ng-annotations';

export class AppComponent extends Component(
  {
    selector: 'app-root',
    template: require('./app.component.html'),
    styles: [require('./app.component.less')]
  },
  [UserRegistryService, Web3Service]
) {

  constructor (userRegistry, web3Service) {
    super();
    this.view = {
      contractAddress: '',
      userAddress: '',
      banner: '',
      registered: false,
      userContractAddress: ''
    };

    this.userRegistry = userRegistry;
    this.userAddress = web3Service.web3.then(web3 => {
      return web3.eth.accounts[0];
    });

    // is registered?
    this.userAddress.then(address => {
      this.view.userAddress = address;
      return userRegistry.userHasRegistered(address);
    }).then(registered => {
      this.view.registered = registered;
    });

    // show user contract address
    this.userAddress.then(address => {
      return userRegistry.user(address);
    }).then(result => {
      this.view.userContractAddress = result;
    });

    // show registry contract address
    userRegistry.address.then(address => {
      this.view.contractAddress = address;
    });

    userRegistry.banner().then(banner => {
      this.view.banner = banner;
    });
  }

  register() {
    let address;
    this.userAddress.then(result => {
      address = result;
      return this.userRegistry.registerUser(address);
    }).then((tx) => {
      this.view.registered = true;
      console.log(tx);
      return this.userRegistry.user(address);
    }).then(result => {
      console.log(result);
      this.view.userContractAddress = result;
    });
  }
}
