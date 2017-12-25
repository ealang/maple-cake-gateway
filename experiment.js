let Web3 = require('web3');
let contract = require('truffle-contract');

let provider = web3.currentProvider; // eslint-disable-line no-undef

let userRegistryConract = contract(require('./build/contracts/UserRegistry.json'));
userRegistryConract.setProvider(provider);

module.exports = function(callback) {

  userRegistryConract.deployed().then(instance => {
    return instance.banner();
  }).then(banner => {
    console.log("banner", banner);
    callback();
  });
};
