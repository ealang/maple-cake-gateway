var UserRegistry = artifacts.require("./UserRegistry.sol"); // eslint-disable-line no-undef

module.exports = function(deployer) {
  deployer.deploy(UserRegistry, "Hello Maple Cake");
};
