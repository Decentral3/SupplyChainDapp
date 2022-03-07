let PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
  networks: {
    rinkeby: {
      provider: PrivateKeyProvider(process.env.Rinkeby_PK, process.env.Rinkeby_PROVIDER),
      network_id: 4,
    }
  },
}
