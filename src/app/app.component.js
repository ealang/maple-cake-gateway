import { Component } from '@angular/core';
import { UserRegistryService } from './eth/user-registry.service';
import { Web3Service } from './eth/web3.service';

class AppComponent {
  static get annotations() {
    return [
      new Component({
        selector: 'app-root',
        template: require('./app.component.html'),
        styles: [require('./app.component.less')]
      }),
    ];
  }

  static get parameters() {
    return [[UserRegistryService], [Web3Service]];
  }

  constructor (userRegistry, web3Service) {
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

export {AppComponent};
