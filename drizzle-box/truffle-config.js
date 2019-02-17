const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    development: {
      host: "",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 7545,
      from: "0x14977c0b46744254646414de68D28f8ac93867EB", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4700000 // Gas limit used for deploys
    }
  }
};