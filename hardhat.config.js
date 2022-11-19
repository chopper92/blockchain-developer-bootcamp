require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const INFURA_API_KEY = "e9a8007928624cde997ab3cc4f1a2090";
const PRIVATE_KEY_1 = "785ada2055fb478012692e82da4df2c851ff034392da93ff80b5dcaf3bbce697";
const PRIVATE_KEY_2 = "89d44ddf31d1f7da1a3af8069fffc0ad24b472ebfffc4a6aee9f5d283c0e6223";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY_1, PRIVATE_KEY_2],
    },
    }
};