const hre = require("hardhat");

async function main() {

  const polyNFT = await hre.ethers.deployContract("PolyNFT");
  const [signer] =   await hre.ethers.getSigners();

console.log(`
PolyNFT contract is deployed to : 
${await polyNFT.getAddress()}
`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});