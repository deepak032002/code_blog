import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <Head>
        <title>DCode - Home</title>
      </Head>
      <div id="Home" className={`${styles.container}`}>
        <p>
          Balance:{" "}
          {state?.connectWallet?.web3?.utils.fromWei(
            state?.connectWallet?.accountBalance,
            "ether"
          )}{" "}
          ETH
        </p>
        <p>
          ChainId:{" "}
          {state?.connectWallet?.chainId &&
            parseInt(state?.connectWallet?.chainId)}
        </p>
      </div>
    </>
  );
};

export default Home;
