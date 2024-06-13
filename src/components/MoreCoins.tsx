'use client'
import { appendCoins } from "@/features/dataSlice";
import { IExpectedCoin, getCoins } from "@/helpers/help";
import React from "react";
import { useDispatch } from "react-redux";

export default function MoreCoins (){
	const [counter, setCounter] = React.useState<number>(2)
	const [loading, setLoading] = React.useState<Boolean>(false)
	const dispatch = useDispatch()

	const handleAsync = async () => {
		setLoading(true);
		const recievedCoins = await getCoins(counter);
		setCounter(prev=>prev + 1);
		dispatch(appendCoins(recievedCoins));
		setLoading(false);
	  };
	const handleClick = () => {
		handleAsync();
	}
	return (
		<div className="pt-3">
			{loading 
			? 
			(<div className="bg-sky-700 rounded-xl p-2" >
				Wait...
			</div>) 
			: 
				(<button className="bg-sky-600 rounded-xl p-2" onClick={handleClick}>
					Fetch More
				</button>)
			}
		</div>
	)
  }