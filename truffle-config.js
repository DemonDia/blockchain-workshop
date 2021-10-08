// Allows us to use ES6 in our migrations and tests.
require('babel-register')
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic ="machine west sing spoon squirrel city portion disorder mechanic heart visa cotton";
module.exports = {
    networks: {
        ropsten: {
          provider: function() {
            return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/d4a8fff9f59f4948bfd78a45e80baa37");
          },
          network_id: '3',
          gas: 6721975,
          
          gasPrice: 132000000000,
        },
        test: {
          provider: function() {
            return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
          },
          network_id: '*',
        },
      },
    compilers: {
      solc: {
        version: "^0.8.0",
        optimizer:{
            enabled: true,
            runs: 200
        }
      }
    }
  };