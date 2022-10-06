import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const getProvider = async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnect,
      options: {
        infuraId: "6acd5c8b49ac40cdb6f6a3e891eb5c92",
      },
    },

    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options: {
        infuraId: "6acd5c8b49ac40cdb6f6a3e891eb5c92",
      },
    },
  };

  const web3Modal = new Web3Modal({
    providerOptions,
  });

  const provider = await web3Modal.connect();
  return provider;
};

export const connectWallet = async () => {
  try {
    const provider = await getProvider();
    const web3 = new Web3(provider);
    const acc = await web3.eth.getAccounts();
    
    console.log(acc);
    const chainId = await web3.eth.getChainId();
    const accountBalance = await web3.eth.getBalance(acc[0]);
    return { acc: acc[0], chainId, accountBalance, web3, provider };
  } catch (error) {
    console.log(error);
  }
};

export const updateWalletCredential = async ({ type, typeData }, web3) => {
  console.log(typeData);
  if (type === "chainId") {
    return {
      type,
      chainId: typeData.chainId,
      accountBalance: await web3.eth.getBalance(typeData.account),
    };
  } else {
    const accountBalance = await web3.eth.getBalance(typeData.account);
    return { type, acc: typeData.account, accountBalance };
  }
};

export const isConnected = async () => {
  try {
    const web3 = new Web3(window.ethereum);
    const acc = await web3.eth.getAccounts();
    if (acc.length > 0) {
      console.log("connected");
      return true;
    } else {
      console.log("not connected");
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const disConnect = async () => {
  try {
    getProvider().then((e) => {
      console.log(e);
    });
  } catch (error) {
    console.log(error);
  }
};
