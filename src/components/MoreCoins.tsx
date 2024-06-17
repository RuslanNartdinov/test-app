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
		<div className="m-4 flex items-center justify-center">
			{loading 
			? 
			(<div className="flex items-center justify-center h-20 w-40 p-4 text-2xl bg-sky-800 rounded-xl" >
				Wait...
			</div>) 
			: 
				(<button className="flex items-center justify-center h-20 w-40 p-4 text-2xl bg-sky-600 rounded-xl" onClick={handleClick}>
					Fetch More
				</button>)
			}
		</div>
	)
  }