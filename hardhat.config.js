require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    parada: {
      url: "http://181.126.80.193",
      chainId: 1217
    }
  },
};
