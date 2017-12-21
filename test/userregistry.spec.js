/* global artifacts, contract, assert */
var UserRegistry = artifacts.require("UserRegistry");

contract('UserRegistry', function() {

  let userRegistry;

  beforeEach(async function() {
    userRegistry = await UserRegistry.deployed();
  });

  it("Should have a default banner message", async function() {
    assert.equal(await userRegistry.banner.call(), "Hello Maple Cake");
  });
});
