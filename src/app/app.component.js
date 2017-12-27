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
    this.contractAddress = '';
    this.userAddress = '';
    this.banner = '';

    web3Service.web3.then(web3 => {
      this.userAddress = web3.eth.accounts[0];
    });
    userRegistry.address.then(address => {
      this.contractAddress = address;
    });
    userRegistry.banner().then(banner => {
      this.banner = banner;
    });
  }
}
