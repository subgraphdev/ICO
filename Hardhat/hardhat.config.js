require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"});
module.exports = {
  solidity: "0.8.6",
  networks:{
    goerli: {
      url:process.env.ALCHEMY_KEY,
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
