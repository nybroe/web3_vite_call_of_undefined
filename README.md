# web3_vite_call_of_undefined
How to reproduce the web3js "TypeError: Cannot read properties of undefined (reading 'call')" on vite build.

## setup
1) Open Chrome
2) Install MetaMask plugin (https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
3) Setup BSC testnet for MetaMask (https://medium.com/spartanprotocol/how-to-connect-metamask-to-bsc-testnet-7d89c111ab2)
4) Download the repro
5) Navigate to "app"
6) Npm install

## dev test (which works)
1) Npm run dev
2) Check the console - no errors

## build test (which breaks)
1) Npm run build
2) Npm run preview
3) Check the console - you will see the following errors: "TypeError: Cannot read properties of undefined (reading 'call')"
