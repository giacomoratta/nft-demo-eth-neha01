# Random notes

Source: https://www.youtube.com/watch?v=axdymRYSHTs

Git-source: https://github.com/neha01/nft-demo



### Basic knowledge
- https://metaschool.so/articles/metamask-networks-how-to-use-them/
- https://docs.filecoin.io/about-filecoin/ipfs-and-filecoin/

**Truffle Migrations** are Javascript files that help you deploy contracts to the Ethereum network. These files are responsible for staging your deployment tasks, and they're written under the assumption that your deployment needs will change over time. As your project evolves, you'll create new migration scripts to further this evolution on the blockchain. A history of previously run migrations is recorded on-chain through a special Migrations contract, detailed below.


### Solidity

`npm i solc` - install the latest version of solidity

`npx solc --version` - version of solidity compiler
```
$ npx solc --version
npx: installed 9 in 2.509s
0.8.16+commit.07a7930e.Emscripten.clang

```


### Truffle
Compile, test, deploy smart contracts.

`npx truffle init` - creates some directories (migrations, contracts, test) and truffle-config.js

`npx truffle version` - prints the following versions
```
$ npx truffle version
Truffle v5.5.26 (core: 5.5.26)
Ganache v7.4.0
Solidity - 0.8.16 (solc-js)
Node v14.20.0
Web3.js v1.7.4
```

N.b. check `truffle-config.js` in order to set the solidity version that matches the one installed (or the one we want to use):
```
  compilers: {
    solc: {
      version: "0.8.16",
      ...
```

`npx truffle console` - starts the console in developent mode
```
$ npx truffle console

# start migrations
> migrate

# get a deployed contract and print contract methods
> let art = await ArtCollectible.deployed()
> art

# Some properties
> art.name()
> art.symbol()

# Mint a dummy NFT
> await art.claimItem('dummy data')

# Get the owner of token#1 (= me! = my address)
> await art.ownerOf(1)

```

### Ganache
Used to create a personal test blockchain.
Truffle uses ganache-cli under the hood.
Enabled the following bloc in truffle-config.js, so truffle will just use the running ganache instead of
spinning a new ganache network.
```
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
```



### ERC-721
Interface for a set of functionalities for NFT.
The package `openzeppelin` implements this interface.
https://www.npmjs.com/package/@openzeppelin/contracts


### The wallet
At the beginning, the transactions were performed locally (on ganache) so
we did not need a key to sign them.

As soon as we start using Infura Rinkeby network, we start creating real transactions
on the testnet, and these have to be signed.
For this reason, we need a real wallet.


