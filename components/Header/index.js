import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Header.module.scss";
import {
  connectToWalletAction,
  changeWalletCredential,
} from "../../redux/actions/ConnectWalletAction";

import { disConnectToWallet } from "../../redux/features/ConnectWalletSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    if (state?.connectWallet?.provider?.on) {
      state?.connectWallet?.provider.on("accountsChanged", (accounts) => {
        dispatch(
          changeWalletCredential(
            { type: "acc", typeData: { account: accounts[0] } },
            state?.connectWallet?.web3
          )
        );
      });

      state?.connectWallet?.provider.on("chainChanged", (chainId) => {
        dispatch(
          changeWalletCredential(
            {
              type: "chainId",
              typeData: { chainId, account: state?.connectWallet?.acc },
            },
            state?.connectWallet?.web3
          )
        );
      });
    }
  }, [dispatch, state?.connectWallet]);

  return (
    <div
      className={`${styles.header_wrapper} w-full sticky top-0 bg-white z-10`}
    >
      <div className="logo">
        <FontAwesomeIcon icon={faCode} /> Code
      </div>

      <div className={styles.menu}>
        <Link href="/">
          <a className={route.route === "/" ? styles.active : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={route.route === "/about" ? styles.active : ""}>About</a>
        </Link>
        <Link href="/blogs">
          <a className={route.route === "/blogs" ? styles.active : ""}>Blogs</a>
        </Link>
        <Link href="/editor">
          <a className={route.route === "/editor" ? styles.active : ""}>
            Editor
          </a>
        </Link>

        <Link href="/register">
          <a className={route.route === "/register" ? styles.active : ""}>Register</a>
        </Link>
        {/* {state?.connectWallet?.isConnected ? (
          <>
            <p>
              {state.connectWallet?.acc?.substr(0, 5)}....
              {state.connectWallet?.acc?.substr(36)}
            </p>
            <button
              className="bg-red-500 text-white p-2 hover:bg-red-600"
              onClick={() => dispatch(disConnectToWallet())}
            >
              Disconnect To Wallet
            </button>
          </>
        ) : (
          <button
            className="bg-blue-500 text-white p-2 hover:bg-blue-600"
            onClick={() => dispatch(connectToWalletAction())}
          >
            Connect To Wallet
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Header;
