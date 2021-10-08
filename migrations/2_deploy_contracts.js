// var ConvertLib = artifacts.require("./ConvertLib.sol");

const { default: axios } = require("axios");



var wallet=artifacts.require("./wallet.sol");
// var admin_address ="0xf39991A3d537E5425b971BA990499a6ceca4B5f5"; 
// var artist_address ="0x32d8f159027a88F3eD48AfD7158e909DBE35aa24";

module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);

    // deployer.deploy(minting_contract,"0xb41dA279eC304833E262Ed5A4F99F56Ee361bD92" , "0xf39991A3d537E5425b971BA990499a6ceca4B5f5" , "0x32d8f159027a88F3eD48AfD7158e909DBE35aa24").then(function(){
    //     console.log("Artist contract address is here", minting_contract.address);
    //     return minting_contract.address
    // }); 
    deployer.deploy(wallet).then(function(){
        console.log("Wallet contract:", wallet.address);
        return wallet.address
    }); 




};
