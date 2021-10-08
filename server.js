const express = require("express");
const bodyParser = require("body-parser");
const send = require('send');
var fs = require('fs');
const Web3 = require('web3');
const ethers = require('ethers');
const mysql = require("mysql");
// Setup Server
const app = express();

//encoding for POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// initialize web3
if (typeof web3 !== 'undefined') {
    console.log("provider  is wrong!!");
    var web3 = new Web3(web3.currentProvider)
} 

else {
    console.log("user infurar");
    var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/d4a8fff9f59f4948bfd78a45e80baa37'))
}



app.post("/Example", async (req, res) => {

    // Load wallet information
    let mnemonicWallet = ethers.Wallet.fromMnemonic(ownerMnemonic);
    let privateKey = mnemonicWallet.privateKey; 
    // Verifying account with PrivateKeys & initializes an account object
    account = web3.eth.accounts.wallet.add(String(privateKey));
    // 
    let exampleInput1 = req.body.exampleInput1; 
    let exampleInput2= req.body.exampleInput2;

    
    let rawData = MyExampleContract.methods.ExampleMethod(exampleInput1,exampleInput2);
    let data = rawData.encodeABI();

    let nonce = await web3.eth.getTransactionCount(admin);
    var gas = await rawData.estimateGas({from: admin});

    var gasPrice = await web3.eth.getGasPrice();
    let tx = {
        from: admin,
        to: MyTokenAddress,
        nonce,
        data,
        gasPrice,
        gas,
        chain: 'ropsten',
        hardfork: 'istanbul'
    };
    // Signing Transaction Object with private keys
    signedTx = await web3.eth.accounts.signTransaction(txData, privateKey);
    // Sends transaction call after singing 
    const sentTransaction = await web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt',console.log);
    console.log("Sent Transaction Details",sentTransaction)
    res.status(200).json(sentTransaction);
});






app.listen(3005, () => {
    console.log("Server Listening on port 3005");
});