import Web3 from "web3";

export const TOKEN_KEY = "ff-auth";

let provider: any | null = 'https://data-seed-prebsc-1-s1.binance.org:8545';

export const authProvider: any = {
    login: async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const web3 = new Web3(Web3.givenProvider || provider);
            const accounts = await web3.eth.getAccounts();
            localStorage.setItem(TOKEN_KEY, accounts[0]);
            return Promise.resolve();
        } else {
            return Promise.reject(
                new Error(
                    "Not set ethereum wallet or invalid. You need to install Metamask",
                ),
            );
        }
    },
};
