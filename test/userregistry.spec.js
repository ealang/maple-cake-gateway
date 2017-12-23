/* global artifacts, contract, assert */
var UserRegistry = artifacts.require("UserRegistry");
var UserData = artifacts.require("UserData");

contract('UserRegistry', function() {

  let userRegistry;

  beforeEach(async function() {
    userRegistry = await UserRegistry.deployed();
  });

  it("Should have a default banner message", async function() {
    assert.equal(await userRegistry.banner.call(), "Hello Maple Cake");
  });

  it("Should allow a new user to register", async function() {
    var user = await userRegistry.getOrRegisterUser();
    var userData = new UserData(user);
    assert.equal(userData, "foo");
  });

});
