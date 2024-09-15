# Simple Blockchain Implementation with Transaction Signing

This project is a simple blockchain implementation using Node.js, Elliptic Curve Cryptography for signing transactions, and SHA-256 hashing for securing the blockchain. It includes key features such as mining, adding transactions, and verifying the integrity of the blockchain.

## Project Structure

- **main.js**: Demonstrates how to use the blockchain by creating a wallet, signing transactions, mining, and checking balances.
- **blockchain.js**: Contains the core logic for blockchain, transactions, blocks, and validation.
- **keygenerator.js**: A script to generate a new public-private key pair using the `elliptic` library.

## Features

- **Blockchain**: A simple implementation with proof-of-work mining and transaction handling.
- **Transactions**: Transactions are signed using elliptic curve cryptography to ensure authenticity.
- **Mining**: Miners validate transactions and are rewarded with coins for adding valid blocks to the blockchain.
- **Validation**: The blockchain validates all transactions and blocks to ensure immutability and security.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/blockchain-project.git
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Run the key generator to create a new wallet (public and private keys):
    ```bash
    node keygenerator.js
    ```

4. Use the public key as your wallet address and update the recipient's public key accordingly in the `main.js` file.

5. Run the main file:
    ```bash
    node main.js
    ```

## Dependencies

- **elliptic**: For elliptic curve cryptography (used for signing transactions).
- **crypto-js**: For hashing using the SHA-256 algorithm.

## Example Usage

1. Generate a key pair (private and public key).
2. Create and sign a new transaction.
3. Mine a new block that includes the transaction.
4. Check the balance of an address.
5. Verify the integrity of the blockchain.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
