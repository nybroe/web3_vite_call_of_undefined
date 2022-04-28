# web3_vite_call_of_undefined
How to reproduce the web3js "TypeError: Cannot read properties of undefined (reading 'call')" on vite build.

## setup
1) open Chrome
2) Install MetaMask plugin (https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
3) Setup BSC testnet for MetaMask (https://medium.com/spartanprotocol/how-to-connect-metamask-to-bsc-testnet-7d89c111ab2)
4) download the repro
5) navigate to "app"
6) npm install

## dev test (which works)
1) npm run dev
2) Check the console - no errors

## build test (which breaks)
1) npm run build
2) npm run preview
3) check the console - you will see the following errors: "TypeError: Cannot read properties of undefined (reading 'call')"
