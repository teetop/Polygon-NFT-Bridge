// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract PolyNFT is ERC721A {

    constructor() ERC721A("PolyNFT", "POS") {}

    function batchMint(uint8 quantity) external payable {
        _safeMint(msg.sender, quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmQjTsKT19J5UwPgJeturjJ6yH5cGeFZuCEcFgzi8iU6kA/1.png";
    }

    function promptDescription() external pure returns (string memory) {
        return "This is a collection of beautiful cats";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}