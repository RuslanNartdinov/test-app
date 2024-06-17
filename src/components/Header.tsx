"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import Auth from './Auth';
import { Provider } from 'react-redux';
import store from '@/store';


const Header = () => {
	const ref_1 = useRef<HTMLAnchorElement>(null)
	const ref_2 = useRef<HTMLAnchorElement>(null)
	const [path, setPath] = React.useState<string>('/')
	
	const [isAuthOpen, setIsAuthOpen] = React.useState(false);
	const signOut = () => 
		{
			localStorage.setItem("authed", "false")
			setIsAuthOpen(true);
		}
	const closeAuth = () => setIsAuthOpen(false);
	React.useEffect(()=>{
		if(path === '/')
			ref_1.current?.classList.remove('bg-sky-400', 'border-b-4')
		else
			ref_1.current?.classList.add('bg-sky-400', 'border-b-4')
		if(path === '/profile')
			ref_2.current?.classList.remove('bg-sky-400', 'border-b-4')
		else
			ref_2.current?.classList.add('bg-sky-400', 'border-b-4')
		
		setIsAuthOpen(localStorage.getItem("authed") != "true")
	}, [path])
	return (
		<div className='z-10 top-0 left-0 bottom-0 right-0 fixed p-4 flex items-center justify-around w-full h-20 bg-sky-800 border-b border-sky-400 space-x-4'>
			<Link onClick={()=>{setPath('/')}} ref={ref_1} href={"/"} className={`w-40 p-4 text-2xl border duration-300 flex items-center justify-center rounded-xl bg-sky-400 border-sky-200 shadow-inner`}>Home</Link>
			<Link onClick={()=>{setPath('/profile')}} ref={ref_2} href={"/profile"} className='w-40 p-4 text-2xl duration-300 flex items-center justify-center border rounded-xl bg-sky-400 border-sky-200 shadow-inner'>Profile</Link>
			{
				isAuthOpen ? <button className='w-40 p-4 text-2xl duration-300 flex items-center justify-center  border rounded-xl bg-sky-900 border-sky-300 shadow-inner'> Sign out </button> :
				<button className='w-40 p-4 text-2xl duration-300flex items-center justify-center  border rounded-xl bg-sky-400 border-sky-300 shadow-inner' onClick={signOut}>Sign out</button>
			}
			<Provider store={store}>
			<Auth isOpen={isAuthOpen} onClose={closeAuth} />
			</Provider>
		</div>
	);
};

export default Header;