

const { default: axios } = require("axios");



var wallet=artifacts.require("./wallet.sol");
var wallet=artifacts.require("./anothersmartcontract.sol");

module.exports = function(deployer) {



    deployer.deploy(wallet).then(function(){
        console.log("Wallet contract:", wallet.address);
        return wallet.address
    }); 

    deployer.deploy(anothersmartcontract).then(function(){
        console.log("Wallet contract:", wallet.address);
        return wallet.address
    }); 





};
