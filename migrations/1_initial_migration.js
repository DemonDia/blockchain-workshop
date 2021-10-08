var Migrations = artifacts.require("./Migrations.sol");
// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
// var Minting = artifacts.require("./minting.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
//   deployer.deploy(Minting);
};
