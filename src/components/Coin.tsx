'use client'
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
export default function Coin(props : {id : string, current_price : number, image: string}) {
	const containerRef = useRef<HTMLDivElement>(null);
 	const contentRef = useRef<HTMLDivElement>(null);
	const [isOverflowing, setIsOverflowing] = useState(false);

	useEffect(() => {
		const checkOverflow = () => {
		  if (containerRef.current && contentRef.current) {
			setIsOverflowing(contentRef.current.scrollWidth > containerRef.current.clientWidth);
		  }
		};
		checkOverflow();
		window.addEventListener('resize', checkOverflow);
		return () => window.removeEventListener('resize', checkOverflow);
	  }, []);
	
	return(
		<div className="animate-fade-in bg-sky-900 items-center justify-between text-center flex flex-col border border-sky-500 w-32 h-52 m-2 p-3 rounded-xl">
      <div ref={containerRef} className="flex items-center justify-center w-full p-1 bg-sky-950 rounded-xl overflow-hidden whitespace-nowrap">
        <div ref={contentRef} className={`${isOverflowing ? 'animate-marquee' : ''}`}>
          {props.id.charAt(0).toUpperCase() + props.id.slice(1)}
        </div>
      </div>
      <Image className="w-20" priority src={props.image} alt={`image for ${props.image}`} width={300} height={500}/>
      <div className="w-full p-1 bg-sky-950 rounded-xl">{`${props.current_price} $`}</div>
    </div>
	)
  }