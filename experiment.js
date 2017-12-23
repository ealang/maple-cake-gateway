let Web3 = require('web3');
let contract = require('truffle-contract');
let UserRegistryAbi = require('./build/contracts/UserRegistry.json');
let UserDataAbi = require('./build/contracts/UserData.json');


let provider = new Web3.providers.HttpProvider('http://localhost:9545');
let web3 = new Web3(provider);
let account = web3.eth.accounts[0];
console.log("account", account);

let userRegistryConract = contract(UserRegistryAbi);
userRegistryConract.setProvider(provider);

let instance = userRegistryConract.deployed()
  
/*
instance.then(userRegistry => {
  return userRegistry.banner();
}).then(banner => {
  console.log(banner);
});
*/

instance.then(userRegistry => {
  return userRegistry.getOrRegisterUser.call({from: account});
}).then(user => {
  console.log("user", user);
  let c = new web3.eth.contract(UserDataAbi, user);
  console.log("c", c);
  return c.call().numDocuments();
}).then(num => {
  console.log("num docs", num);
});
