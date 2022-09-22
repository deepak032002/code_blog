import { connectWallet, isConnected, disConnect, updateWalletCredential } from "../../../components/utils/connectWallet";
import { connectToWallet, updateToWalletCredential} from "../../features/ConnectWalletSlice";

export const connectToWalletAction = () => async (dispatch) => {
  const res = await connectWallet();
  dispatch(connectToWallet(res));
};

export const changeWalletCredential = ({type, typeData}, web3) => async (dispatch) => {
  const res = await updateWalletCredential({type, typeData}, web3);
  dispatch(updateToWalletCredential(res));
};

export const isConnectedToWalletAction = () => async (dispatch) => {
    const web3 = await isConnected();
    dispatch(connectToWallet(web3))
};