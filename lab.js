const Web3 = require('web3');
const ethers = require('ethers');



if (typeof web3 !== 'undefined') {
    console.log("provider  is wrong!!");
    var web3 = new Web3(web3.currentProvider)
} 

else {
    console.log("user infurar");
    var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/YOUR_KEY'))

}

// your wallet 
var wallet_address="Your Wallet Address you created";
const mnemonic ="Your secret phrase";

web3.eth.defaultAccount = wallet_address;

// 0xa205D545cbd2D9CB7C47c82C305c0adcdF1AaD36

var fs = require('fs');
const wallet_contract = JSON.parse(fs.readFileSync('./build/contracts/wallet.json', 'utf8'));

const wallet_contract_addr = "Your Smart Contract Address";

// https://ropsten.etherscan.io/address/0xa205D545cbd2D9CB7C47c82C305c0adcdF1AaD36
var MyWalletContract = new web3.eth.Contract(wallet_contract.abi, wallet_contract_addr);

MyWalletContract.setProvider(web3.currentProvider);

// info

var demo = async() => {

     // let artist= req.body.artist 
    // let buyer = req.body.buyer;

    // Load wallet information
    let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
    let privateKey = mnemonicWallet.privateKey; 
    // Verifying account with PrivateKeys & initializes an account object

    account = web3.eth.accounts.wallet.add(String(privateKey));
    console.log(account);
    
    // How to withdraw money?
    let tx = MyWalletContract.methods.receiveMoney();
    let data = tx.encodeABI();

    let nonce = await web3.eth.getTransactionCount(wallet_address);
    
  
    var gas = await MyWalletContract.methods.receiveMoney().estimateGas({ from: wallet_address , value: web3.utils.toWei("0.5","ether") });
    // var gas = await tx.estimateGas({from: wallet_address});
    // var gas = await web3.eth.estimateGas({to: minting_contract_addr, data: data});
    console.log("GAS HERE:",gas);
    if (gas<30000){
        // this is a dirty method.
        gas = 55838;
        console.log("Not enough gas",gas);
    }
    var gasPrice = await web3.eth.getGasPrice();
    let txData = {
        from: wallet_address,
        to: wallet_contract_addr,
        value: web3.utils.toWei("0.5","ether"),
        nonce,
        data,
        gasPrice,
        gas,
        chain: 'ropsten',
        hardfork: 'istanbul'
    };
    // Signing Transaction Object with private keys
    console.log("txData", txData);
    signedTx = await web3.eth.accounts.signTransaction(txData, privateKey);
    console.log(signedTx);
    console.log("===READY===");
    // Sends transaction call after singing 
    const sentTransaction = await web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt',console.log);
    console.log("===RESPONSE===");
    console.log("Sent Transaction Details",sentTransaction)
    // res.status(200).json(sentTransaction);

};

demo();

