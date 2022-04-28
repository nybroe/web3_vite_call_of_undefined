# web3_vite_call_of_undefined
How to reproduce the web3js "TypeError: Cannot read properties of undefined (reading 'call')" on vite build.

## setup
1) Download the repro
2) Navigate to "app"
3) Npm install

## dev test (which works)
1) Npm run dev
2) Check the console - no errors

## build test (which breaks)
1) Npm run build
2) Npm run preview
3) Check the console - you will see the following errors: "TypeError: Cannot read properties of undefined (reading 'call')"
