const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const PolyNFT = await hre.ethers.getContractFactory("PolyNFT");
  const polyNFT = PolyNFT.attach(CONTRACT_ADDRESS);

  const batchTx = await polyNFT.batchMint(5);
  await batchTx.wait();

  console.log(`
    ${await polyNFT.balanceOf(ACCOUNT_ADDRESS)} PolyNFTs was batch minted to 
    ${ACCOUNT_ADDRESS}
    `);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
