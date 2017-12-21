/* global artifacts, contract, assert */
var Owned = artifacts.require("Owned");

contract('Owned', function(accounts) {
  it("Should save the owner", async function() {
    let owned = await Owned.new();
    assert.equal(await owned.owner.call(), accounts[0]);
  });
});
