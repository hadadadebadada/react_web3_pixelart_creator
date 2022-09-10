const OnChainNFT = artifacts.require("OnChainNFT");

module.exports = function (deployer) {
  deployer.deploy(OnChainNFT);
};
