let Web3 = require('web3');
let contract = require('truffle-contract');

let provider = web3.currentProvider; // eslint-disable-line no-undef

let account = web3.eth.accounts[0];
console.log("account", account);

let userRegistryConract = contract(require('../build/contracts/UserRegistry.json'));
userRegistryConract.setProvider(provider);

module.exports = function(callback) {
  let inst;

  userRegistryConract.deployed().then(instance => {
    inst = instance;
    return instance.banner();
  }).then(banner => {
    console.log("banner", banner);
    return inst.registerUser({from: account, gas:1000000});
  }).then(tx => {
    console.log("result", tx);
    return inst.users(account);
  }).then(user => {
    console.log("user address", user);
  }).catch(reason => {
    console.log(reason);
  }).then(() => callback());
};
