import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.scss'


const Home = () => {

  const state = useSelector(state => state)
  return (
    <div id="Home" className={`${styles.container}`}>
        <p>Balance: {state?.connectWallet?.accountBalance}</p>
        <p>ChainId: {state?.connectWallet?.chainId && parseInt(state?.connectWallet?.chainId)}</p>
    </div>
  )
}

export default Home