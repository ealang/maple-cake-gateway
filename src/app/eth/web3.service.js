import { Service } from '../../ng-annotations.js';
import Web3 from 'web3';

export class Web3Service extends Service {
  constructor() {
    super();
    this.provider = new Promise(function(resolve) {
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
    });
    this.web3 = this.provider.then(provider => new Web3(provider));
  }
}
