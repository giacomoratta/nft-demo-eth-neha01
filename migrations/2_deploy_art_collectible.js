const artCollectible = artifacts.require('ArtCollectible');

module.exports = function (deployer) {
  deployer.deploy(artCollectible);
};
