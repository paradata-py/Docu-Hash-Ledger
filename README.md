# DocuHash Ledger

## Overview
DocuHash Ledger is a smart contract on the Ethereum blockchain, tailored for document hash management. Developed within the Hardhat environment, it assures secure storage and retrieval of document hashes, enabling decentralized verification of document authenticity and integrity.

## Features
- **Store Document Hashes:** Securely store any document's hash, linked to a unique document ID.
- **Retrieve Document Hashes:** Efficiently fetch stored hashes using the document ID.
- **Event Emission:** Emits an event upon storing a document hash, enhancing traceability.
- **Hardhat Integration:** Crafted and tested in the Hardhat framework for a smooth development experience.

## Prerequisites
- Node.js
- npm or Yarn
- Ethereum wallet with test Ether

## Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/paradata-py/Docu-Hash-Ledger
    ```

2. **Navigate to the project directory:**
    ```bash
    cd DocuHash-Ledger
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Install dotenv:**
    ```bash
    npm i dotenv
    ```
    
## Configuration and Setup
1. **Generate a new private key:**
    ```bash
    npx hardhat generate-keypair
    ```
   Copy the private key from the result.

2. **Create a `.env` file:**
    Add your private key to the `.env` file like this:
    ```
    PRIVATE_KEY=<Your Private Key>
    ```

## Usage
1. **Compile the contract with NPX:**
    ```bash
    npx hardhat compile
    ```

2. **Run specific tests:**
    ```bash
    npx hardhat test test/DocuHashLedger.test.js
    ```

3. **Deploy the contract:**
    ```bash
    npx hardhat run scripts/deploy.js --network paradata
    ```

## Contract Functions
- `storeDocumentHash(string memory documentId, string memory documentHash)`: Store a document's hash.
- `getDocumentHash(string memory documentId) returns (string memory)`: Retrieve a stored document's hash.

## Events
- `DocumentHashStored(string documentId, string documentHash)`: Triggered when a new document hash is stored.

## Hardhat Configuration (`hardhat.config.js`)
Customize the Hardhat settings in `hardhat.config.js`. Default network configuration:
- Network Name: Parada
- URL: http://181.126.80.193:8545
- Chain ID: 1217

## License
This project is under the MIT License.
