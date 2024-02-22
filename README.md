# On-Chain Pixelart NFT Creator

## Overview

The On-Chain Pixelart NFT Creator allows users to unleash their creativity by drawing pixel art directly in their web browser and minting it as a unique NFT. Unlike traditional NFT platforms that store images off-chain, our tool embeds the artwork's base64-encoded data directly into the blockchain. This method ensures that your artwork is permanently stored on-chain, without relying on external URLs or backlinks that could break or change over time.

## Features

- **Create Pixel Art:** A user-friendly interface for drawing pixel art, featuring a grid-based canvas with customizable colors.
- **Blockchain Integration:** Choose your preferred blockchain to mint your artwork as an NFT. Supported blockchains include Ethereum, Polygon, and more.
- **On-Chain Storage:** Artwork is stored directly on the blockchain as base64-encoded data, ensuring permanence and tamper-proof authenticity.
- **Mint NFTs:** Easily mint your pixel art as an NFT directly from the browser. No external wallets or complicated steps required.
- **View and Share:** After minting, view your NFT in your profile and share it with the world.

## Technology Stack

- **Solidity:** Smart contracts for NFT creation and management.
- **Truffle:** Development environment for Ethereum, managing the compilation and deployment of smart contracts.
- **React:** Frontend development for a dynamic and responsive user interface.
- **JavaScript:** Core programming language for implementing web app logic and blockchain interaction.
- **Three.js:** For rendering 3D versions of your pixel art, adding an extra dimension to your creations.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- A web browser with MetaMask or another web3 wallet extension.

### Setup

1. **Clone the repository**

   ```
   git clone https://github.com/your-repository/on-chain-pixelart-nft-creator.git
   cd on-chain-pixelart-nft-creator
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Compile and migrate smart contracts**

   Ensure you have Truffle installed globally, or you can use npx:

   ```
   truffle compile
   truffle migrate --network <your_network>
   ```

4. **Start the React app**

   ```
   npm start
   ```

   This will launch the app in your browser, where you can start creating and minting your pixel art NFTs.

### How to Use

- **Draw:** Use the canvas to create your pixel art. Select colors and use the mouse or touch to paint.
- **Mint:** Once you're satisfied with your artwork, click the "Mint NFT" button. You'll be prompted to connect your wallet.
- **Choose Blockchain:** Select the blockchain you wish to mint on and confirm the transaction.
- **Share:** After minting, share your unique NFT with others directly from the platform.

## Contributions

We welcome contributions and suggestions! Please create issues or pull requests on our GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Create, mint, and share your pixel art with the world like never before. The On-Chain Pixelart NFT Creator offers a unique bridge between creativity and blockchain technology, making your digital art truly immortal.
