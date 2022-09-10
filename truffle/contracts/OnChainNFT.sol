/* 
    A library that provides a function for encoding some bytes in base64
    Source: https://github.com/zlayine/epic-game-buildspace/blob/master/contracts/libraries/Base64.sol
*/
//import {Base64} from "./Base64.sol";



// npm install @openzeppelin/contracts
pragma solidity >=0.4.22 <0.9.0;

//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"

import "../node_modules/openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; 
import "../node_modules/openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/openzeppelin/contracts/utils/Counters.sol";

//import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract OnChainNFT is ERC721URIStorage, Ownable {
    event Minted(uint256 tokenId);

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("OnChainNFT", "ONC") {}


    /* Generates a tokenURI using Base64 string as the image */
    function formatTokenURI(string memory imageURI)
        public
        pure
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                 //   Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name": "LCM ON-CHAINED", "description": "A simple PNG based on-chain NFT", "image":"',
                                imageURI,
                                '"}'
                            )
                        )
                 //   )
                )
            );
    }

    /* Mints the token */

    // evtl public view
    function mint(string memory imageURI) public onlyOwner {
       // string memory imageURI = svgToImageURI();
        string memory tokenURI = formatTokenURI(imageURI); //formating to json

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        emit Minted(newItemId);
    }
}
