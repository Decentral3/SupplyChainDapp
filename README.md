Fair Trade Coffee Supply Chain

<b>Supply chain & data auditing</b>

This repository contains an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![Screenshot 2022-03-11 at 2 42 56 PM](https://user-images.githubusercontent.com/98121796/157947189-db6a51e0-c57c-4585-afd1-b8862b0bf7fd.png)
![Screenshot 2022-03-11 at 2 39 47 PM](https://user-images.githubusercontent.com/98121796/157946911-05a52743-ca80-46a3-98fe-1dad2de45e5d.png)
![Screenshot 2022-03-11 at 2 39 52 PM](https://user-images.githubusercontent.com/98121796/157946956-b4c14885-e586-46f3-9795-a5f986275b24.png)

<b>UML</b>
![Activity Diagram](https://user-images.githubusercontent.com/98121796/157948179-51e72836-11c2-4601-b920-aaf554b94e38.png)
![Data Modeling](https://user-images.githubusercontent.com/98121796/157948180-b6fbb38d-7eb5-4d6f-a48e-aa7aa87fa0c3.png)
![Sequence Diagram](https://user-images.githubusercontent.com/98121796/157948181-1eeb5d9e-51dc-4288-84af-294564dd27a4.png)
![State Diagram](https://user-images.githubusercontent.com/98121796/157948183-6ee9a055-2b4f-4e77-b08e-a081552ed1aa.png)

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

Give examples (to be clarified)
Installing
The starter code is written for Solidity v0.4.24. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function mutability and visibility to be specified (please refer to Solidity documentation for more details). To use this starter code, please run npm i -g truffle@4.1.14 to install Truffle v4 with Solidity v0.4.24.

A step by step series of examples that tell you have to get a development env running

Clone this repository:

git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
Change directory to project-6 folder and install all requisite npm packages (as listed in package.json):

cd project-6
npm install
Launch Ganache:

ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"

In a separate terminal window, run truffle in dev mode Your terminal should look something like this:

<img width="725" alt="ganache-cli" src="https://user-images.githubusercontent.com/98121796/157953115-d17aacea-dbc7-4b20-890c-4c036bcc2677.png">

In a separate terminal window, Compile smart contracts:

truffle compile

<img width="730" alt="truffle_compile" src="https://user-images.githubusercontent.com/98121796/157954122-75a941dc-46fa-4b21-bac2-540131c802b3.png">

This will create the smart contract artifacts in folder build\contracts.

Migrate smart contracts to the locally running blockchain, ganache-cli:

truffle migrate
Your terminal should look something like this:
<img width="712" alt="truffle_migrate" src="https://user-images.githubusercontent.com/98121796/157954209-5f04cee6-7d30-47e2-8620-3f0dfd144ede.png">

Test smart contracts:

truffle test
All 10 tests should pass.
<img width="846" alt="truffle_test" src="https://user-images.githubusercontent.com/98121796/157954284-00c9c8b4-425b-413f-9af1-42847e31367b.png">

In a separate terminal window, launch the DApp:

npm run dev

<b>Acknowledgments</b>

Truffle v4.1.14 (core: 4.1.14)

Ganache-cli

Solidity v0.4.24 (solc-js)

Node v16.4.2


<b>Deploy smart contracts on public test network</b>

Deploy to Rinkeby:

truffle migrate --reset --network rinkeby


contract address:  0x92C2891D293dEf693BCe12706b98136d4075747A

transaction hash:    0x9209b3593b2a34c56e1e84f45843f8294739a29e81e60a2642683ea21ab8ab14

https://rinkeby.etherscan.io/address/0x92C2891D293dEf693BCe12706b98136d4075747A

<img width="1438" alt="Screenshot 2022-03-11 at 3 23 54 PM" src="https://user-images.githubusercontent.com/98121796/157956416-1b5c6ace-1e2a-418a-a383-78a546653530.png">
