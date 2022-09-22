import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isConnected: false,
};

const ConnectWalletSlice = createSlice({
  name: "connectWallet",
  initialState,
  reducers: {
    connectToWallet: (state, action) => {
      return { ...state, isConnected: true, ...action.payload };
    },

    updateToWalletCredential: (state, action) => {
      if(action.payload.type === 'chainId'){
        return { ...state, isConnected: true, chainId: action.payload.chainId, accountBalance: action.payload.accountBalance};
      }else{
        return { ...state, isConnected: true, acc: action.payload.acc, accountBalance: action.payload.accountBalance };
      }
    },

    disConnectToWallet: (state) => {
      return { ...state, isConnected: false, acc: '', accountBalance: '', chainId: '', web3: null, provider: null};
    },
  },
});

export const { connectToWallet, disConnectToWallet, updateToWalletCredential } =
  ConnectWalletSlice.actions;

export default ConnectWalletSlice.reducer;
