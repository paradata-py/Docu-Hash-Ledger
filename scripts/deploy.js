const hre = require("hardhat");

async function main() {
  const DocuHashLedger = await hre.ethers.getContractFactory("DocuHashLedger");
  const docuHashLedger = await DocuHashLedger.deploy();

  await docuHashLedger.deployed();

  console.log("DocuHash Ledger deployed to:", docuHashLedger.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
