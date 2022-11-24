# Accelarator DAO


## Technology

This Project uses:

- Metamask
- Truffle
- Infuria
- ReactJs
- Tailwind CSS
- Ganache-CLI
- Solidity
- Web3js
- Faucet

## Running the demo

To run the demo follow these steps:

1. Clone the project with the code below.
    ```sh
    # Make sure you have the above prerequisites installed already!
    git clone https://github.com/Daltonic/acceleratorDAO PROVIDER_NAME
    cd PROVIDER_NAME # Navigate to the new folder.
    npm i -g yarn
    npm i -g truffle
    npm i -g ganache-cli
    yarn install # Installs all the dependencies.
    ```
2. Create an Infuria project, copy and paste your key in the spaces below.
3. Update the `.env` file with the following details.
    ```sh
    ENDPOINT_URL=<PROVIDER_URL>
    SECRET_KEY=<SECRET_PHRASE>
    DEPLOYER_KEY=<YOUR_PRIVATE_KEY>
    ```
4. In a new terminal run `truffle migrate` or `truffle migrate --network development`
 
5. Run `ganache-cli -a`

6. And in another terminal run the app using `yarn start`
<br/>

