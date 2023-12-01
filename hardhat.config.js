require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const { PRIVATE_KEY } = process.env;

task("generate-keypair", "Generates a random wallet keypair")
  .setAction(async () => {
    const wallet = ethers.Wallet.createRandom();
    const privateKey = wallet.privateKey.slice(2); 
    console.log("Address:", wallet.address);
    console.log("Private Key:", privateKey);
  });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    paradata: {
      url: "http://181.126.80.193:8545",
      chainId: 1217,
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: 0
    }
  },
};
