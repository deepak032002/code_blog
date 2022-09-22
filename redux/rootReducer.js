import { combineReducers } from "@reduxjs/toolkit";
import connectWalletReducer from "./features/ConnectWalletSlice";

const rootReducer = combineReducers({
  connectWallet: connectWalletReducer,
});

export default rootReducer;
