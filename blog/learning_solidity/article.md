# Documenting my journey of learning solidity

<div class="date">
  <span class="smaller"><b>May 10th, 2022</b></span></div>
</div>
<div class="centerPosition"><hr></div>


My deep passion for cryptocurrency, and more specifically decentralized finance and blockchain applications has driven me to quit my job in January 2022 to pursue these interests from the engineering perspective rather than the hobbyist perspective.

It has become what I do every day during most of my free time for the past 3 years now. I can't stretch how profound my interest is and how bad I just want to understand everything.

Between January and May, I have taken small breaks that I had never taken before, relaxed for a bit and spent most of my days reading, researching, improving this website, adding little things to [defi.navy](https://defi.navy), learning cool little web development things and solidity.

This post will collect all the things I have so far learned about the solidity programming language with the intent to either develop applications in the future, find employment in the web3, develop my own applications or audit smart contracts. The path is not exactly clear to me yet, all I know is that *I want to learn*.

```solidity
// SPDX-License-Identifier: GPLv3

pragma solidity >=0.8.3 <0.9.0;

import "./Ownable.sol";

contract messages is Ownable {
    // Messages array
    string[] public messagesArray;

    // state variable that counts message id
    uint256 public messageId; 

    // mapping for addresses and messages
    mapping(uint256 => address) public messageIdToAddress;

    // mapping for addresses and amount of messages written
    mapping(address => uint256) public addressToAmountOfMessages;

    // event to emit to if the message is created
    event newMessage(address _sender, uint256 _messageId, string _message);
    event messageEdited(address _sender, uint256 _messageId, string _newMessage);
    event messageRemoved(address _sender, uint256 _messageId);
    event allMessagesRemoved(address _sender, uint256[] _messageIdArray);
    event donationSent(address _sender, uint256 _amount);
    event withdrawalTriggered(address _recipient, uint256 _amount);

    // write message to the blockchain
    function writeMessage(string calldata _message) public {
        // save the messageId corresponding to the message sender
        messageIdToAddress[messageId] = msg.sender;

        // save the message in the messages array
        messagesArray.push(_message);

        // increment the count of messages an address has
        addressToAmountOfMessages[msg.sender]++;

        // emit event that a new message has been saved
        emit newMessage(msg.sender, messageId, _message);

        // increment the Id of the message
        messageId++;
    }
}
```


***

## Article index

***

