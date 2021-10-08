// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract wallet {
    //Variables
    uint public balanceReceived;
    address payableTo;
    
    
    // simple event emitter 
    event ReceiveMoney(address indexed from, uint256 value);
    
    // Another example 
    //event emitter inputs are set to true if the field is part of the log’s topics, false if it one of the log’s data segment.
    event WithdrawMoneyTo(address indexed from, address indexed to, uint256 value);
    
    // event FailedwithdrawMonetyTo(address indexed from, address indexed to, uint256 value);
    // 
    function receiveMoney() public payable {
        balanceReceived +=msg.value; 
        emit ReceiveMoney(msg.sender, msg.value);
    }
    // calling a fucntion without event emitter the logs will be empty. Check the console below after calling this function.
    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function withdrawMoney() public {
        address payable to = payable(msg.sender);
        uint256 value=getBalance();
        to.transfer(getBalance());
        balanceReceived -=value; 
    }
    
    function withdrawMoneyTo(address _payableTo) public {
        uint256 value=getBalance();
        payable(_payableTo).transfer(value);
        // The withdrawMoney event emitter is emitted, it stores the arguments passed in transaction logs. See logs in remix console after calling this function. 
        // These logs are stored on blockchain and are accessible using address of the contract till the contract is present on the blockchain.
        emit WithdrawMoneyTo(msg.sender,_payableTo, value);
        // emit FailedwithdrawMonetyTowithdrawMoneyTo(msg.sender,_payableTo, value);
        balanceReceived -=value; 
    
}
// fall back function required 
//by any smart contract for Transactions that has no data. 
receive() external payable {
}
}