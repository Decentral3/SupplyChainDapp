
/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 *   > > Using Truffle V5 or later? Make sure you install the `web3-one` version.
 *
 *   > > $ npm install truffle-hdwallet-provider@web3-one
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = process.env.INFURAKEY

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
    networks: {
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/aeb36ffc8abf4de6b39168ea477f3f16`),
            network_id: 4,       // rinkeby's id
            gas: 4500000,        // rinkeby has a lower block limit than mainnet
            gasPrice: 10000000000,
            networkCheckTimeout: 1000
        },
        development: {
            host: "127.0.0.1",  //localhost
            port: 7545,  //Port for Truffle(9545) //Or, Ganache-cli (8545)
            network_id: "*" // Match any network id
        }

    },
    compilers: {
        solc: {
            version: "0.4.24"  // ex:  "0.4.24". (Default: Truffle's installed solc)
        }
    }
};