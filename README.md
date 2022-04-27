# web3_vite_call_of_undefined
How to reproduce the web3js "TypeError: Cannot read properties of undefined (reading 'call')" on vite build.

## setup
1) navigate to "app"
2) npm install

## dev test (which works)
1) npm run dev
2) Check the console - no errors

## build test (which breaks)
1) npm run build
2) npm run preview
3) check the console - you will see the following errors: "TypeError: Cannot read properties of undefined (reading 'call')"
