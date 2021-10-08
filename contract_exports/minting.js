
var fs = require('fs');
const minting_contract = JSON.parse(fs.readFileSync('./build/contracts/Minting.json', 'utf8'));

const minting_contract_addr = "0x593163AfdF63858051BcE2C22ee0902C3871B252";
// const MyContract = new web3.eth.Contract(minting_contract.abi, minting_contract_addr);



module.exports = {
    address: minting_contract_addr,
    abi: minting_contract.abi
  };