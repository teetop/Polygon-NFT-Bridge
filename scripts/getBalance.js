const hre = require("hardhat");
require("dotenv").config();

const amoyContract = "0xE4E9aE0Ea1Dfc216867594fb55428C2726b607a1";

async function main() {
  const PolyNFT = await hre.ethers.getContractFactory("PolyNFT");
  const contractOnAmoy = await PolyNFT.attach(amoyContract);

  const balance = await contractOnAmoy.balanceOf(process.env.ACCOUNT_ADDRESS);

  const [signer] =   await hre.ethers.getSigners();

  console.log(`
    PolyNFT Balance on
    ${amoyContract}
    is: ${balance.toString()}
    `);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});