"use client"
import React from 'react';
import CoinList from './CoinList';
import MoreCoins from './MoreCoins';
import {Provider} from "react-redux"
import store from "../store"

const Coins = () => {
	return (
		<Provider store={store}>
			<div className="flex flex-col items-center justify-center">
			<CoinList/>
			<MoreCoins/>
			</div>
		</Provider>
	);
};

export default Coins;