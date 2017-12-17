import { Injectable } from '@angular/core';
import Web3 from 'web3';
import contract from 'truffle-contract';
import Greeter from '../../build/contracts/Greeter.json';

export class GreeterService {
  static get annotations() {
    return [
      new Injectable()
    ];
  }

  constructor() {
    this._greeter = new Promise(function(resolve) {
      window.addEventListener('load', function() {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        if (typeof window.web3 !== 'undefined') {
          console.log('Injected web3 detected.'); // eslint-disable-line no-console
          resolve(window.web3.currentProvider);
        } else {
          console.log('No web3 instance injected, using localhost'); // eslint-disable-line no-console
          let provider = new Web3.providers.HttpProvider('http://localhost:9545');
          resolve(provider);
        }
      });
    }).then(provider => {
      let greeter = contract(Greeter);
      greeter.setProvider(provider);
      return greeter.deployed();
    });

    this.address = this._greeter.then(greeter => greeter.address);
  }

  greeting() {
    return this._greeter.then(greeter => {
      return greeter.greet.call();
    });
  }
}
