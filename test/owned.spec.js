/* global artifacts, contract, assert */
var Owned = artifacts.require('Owned');

contract('Owned', function(accounts) {
  it('should save the owner', async function() {
    let owned = await Owned.new(accounts[0]);
    assert.equal(await owned.owner(), accounts[0]);
  });
});
