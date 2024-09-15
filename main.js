const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Generate your private key
const myKey = ec.keyFromPrivate('fc8e1021501eb875cb1913daf80af3cdf28b11d52aa885b6088606e1c2b9586e');

// Get the public key (which is your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create a new blockchain instance
let Coin = new Blockchain();

// Create a new transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'recipient public key here', 10);
tx1.signTransaction(myKey);

// Add the transaction to the blockchain
Coin.addTransaction(tx1);

console.log('\nStarting miner...');
Coin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of dk is', Coin.getBalanceOfAddress(myWalletAddress));

console.log('is chain valud', Coin.isChainValid())

Coin.chain[1].transactions[0].amount = 100

console.log('is chain valud', Coin.isChainValid())

