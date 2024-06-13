'use client'
import { IExpectedCoin, getCoins } from "@/helpers/help";
import React from "react";

export default function MoreCoins (props : {setCoins : React.Dispatch<React.SetStateAction<IExpectedCoin[]>>}){
	const [counter, setCounter] = React.useState<number>(2)
	const [loading, setLoading] = React.useState<Boolean>(false)

	const handleAsync = async () => {
		setLoading(true);
		const recievedCoins = await getCoins(counter);
		setCounter(prev=>prev + 1);
		props.setCoins(prev => ([...prev, ...recievedCoins]));
		setLoading(false);
	  };
	const handleClick = () => {
		handleAsync();
	}
	return (
		<div className="">
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