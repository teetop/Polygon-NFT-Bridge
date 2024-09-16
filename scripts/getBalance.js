const hre = require("hardhat");
require("dotenv").config();

const amoyContract = "0xe6fb9BC6F8f916e0909105437dB20102E894D3f0";

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