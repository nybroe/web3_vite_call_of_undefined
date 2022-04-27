import Web3 from "web3";
import { CONTRACT, address } from "./contract";
import { TOKEN_KEY } from "./authProvider";

const web3 = new Web3(window.ethereum);

export const getContract = () => {
  return new web3.eth.Contract(CONTRACT, address);
};

export const isOwner = () => {
  const contract = getContract();
  const sender = localStorage.getItem(TOKEN_KEY);
  contract.methods.isOwner(sender).call({from: sender}, function (err, res) {
    if (err) {
      console.log("An error occured", err);
      return false;
    }
    console.log("IsOwner", res);
    return true;
  });
};
