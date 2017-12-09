import { Component } from '@angular/core';
import Web3 from 'web3'
import contract from 'truffle-contract'
import Greeter from '../../build/contracts/Greeter.json'

let getGreeter = new Promise(function(resolve) {
  window.addEventListener('load', function() {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    if (typeof window.web3 !== 'undefined') {
      console.log('Injected web3 detected.');
      resolve(window.web3.currentProvider);
    } else {
      console.log('No web3 instance injected, using localhost');
      let provider = new Web3.providers.HttpProvider('http://localhost:9545')
      resolve(provider);
    }
  })
}).then(provider => {
  let greeter = contract(Greeter)
  greeter.setProvider(provider)
  return greeter.deployed();
});

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

  constructor () {
    this.address = '';
    this.greeting = '';
    getGreeter.then((greeter) => {
      greeter.greet.call().then(greeting => {
        this.greeting = greeting;
      })
      this.address = greeter.address;
      console.log(greeter);
    });
  }
}

export {AppComponent};
