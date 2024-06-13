'use client'
import React from "react";
import Coin from "./Coin";
import MoreCoins from "./MoreCoins";
import Auth from "./Auth";
import { getCoins, IExpectedCoin } from "@/helpers/help";

  const CoinList = () => {
	const [coins, setCoins] = React.useState<IExpectedCoin[]>([]);

	React.useEffect(() => {
		console.log("Initial fetch")
	  const handleAsync = async () => {
		const recievedCoins = await getCoins(1);
		setCoins(recievedCoins);
	  };
	  handleAsync();
	}, []);
  
	return (
		<div className="flex items-center justify-center flex-col">
		  <div className="w-full h-full items-center justify-center flex-wrap flex">
			{coins.map((coin, idMap) => (
			  <Coin key={idMap} id={coin.id} current_price={coin.current_price} image={coin.image}/>
			))}
		  </div>
		  <MoreCoins setCoins={setCoins}/>
		</div>
	);
  };

  

export default CoinList;