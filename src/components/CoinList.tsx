'use client'
import React from "react";
import Coin from "./Coin";
import { getCoins, IExpectedCoin } from "@/helpers/help";
import { useDispatch, useSelector } from "react-redux";
import { appendCoins } from "@/features/dataSlice";
import { RootState, AppDispatch } from "../store";

const CoinList = () => {
  const data = useSelector((state: RootState) => state.coins);
  const dispatch = useDispatch<AppDispatch>()
	console.log("render")
  React.useEffect(() => {
	console.log("useEffect")
    const handleAsync = async () => {
      const recievedCoins = await getCoins(1);
      dispatch(appendCoins(recievedCoins));
    };
    handleAsync();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-full h-full items-center justify-center flex-wrap flex">
        {data.coins.map((coin, idMap) => (
          <Coin key={idMap} id={coin.id} current_price={coin.current_price} image={coin.image} />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
