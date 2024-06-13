import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<div className='p-10 flex items-center justify-around w-full h-20 bg-sky-800 border-b border-sky-400'>
			<Link href={"/"} className='flex items-center justify-center p-1 w-28 border rounded-xl bg-sky-400 border-sky-300 shadow-inner'>Home</Link>
			<Link href={"/profile"} className='flex items-center justify-center  p-1 w-28 border rounded-xl bg-sky-400 border-sky-300 shadow-inner'>Profile</Link>
		</div>
	);
};

export default Header;