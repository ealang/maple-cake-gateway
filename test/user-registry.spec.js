/* global artifacts, contract, assert */
var UserRegistry = artifacts.require('UserRegistry');
var UserData = artifacts.require('UserData');

contract('UserRegistry', function(accounts) {

  let userRegistry;

  beforeEach(async function() {
    userRegistry = await UserRegistry.deployed();
  });

  it('should have a default banner message', async function() {
    assert.equal(await userRegistry.banner.call(), 'Hello Maple Cake');
  });

  it('should provide a way to find out if user has registered', async function() {
    let account = accounts[0];
    assert.equal(await userRegistry.userHasRegistered({from: account}), false, 'User should not be registered yet');
    await userRegistry.registerUser({from: account});
    assert.equal(await userRegistry.userHasRegistered({from: account}), true, 'User should be registered');
  });

  it('should create a new user owned by sender', async function() {
    let account = accounts[0];
    await userRegistry.registerUser({from: account});
    let userAddress = await userRegistry.users(account);
    assert.isAbove(userAddress, 0x0, 'Address of user is invalid');

    let user = new UserData(userAddress);
    assert.equal(await user.owner(), account, 'Owner of user is sender');
  });
});
