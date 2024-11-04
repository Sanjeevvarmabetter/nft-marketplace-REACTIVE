require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",

  networks: {
    reactive: {
      url: "https://kopli-rpc.rkt.ink",
      accounts: [process.env.PRIVATE_KEY] 
    }
  }
};

