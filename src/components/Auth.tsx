"use client"
import React from 'react';

const Auth = () => {
	return (
		<div className="top-0 fixed w-full h-full flex items-center justify-center bg-opacity-75 bg-black">
			<div className='w-96 h-96 flex items-center justify-center rounded-xl bg-sky-900 p-4 border border-sky-200'>
				<form className='flex items-center w-full h-full justify-center flex-col' action="">
					<input className='rounded-xl h-7 border border-sky-200 mt-3' type="text" />
					<input className='rounded-xl h-7 border border-sky-200 mt-3' type="password" />
					
					<button className=' flex items-center justify-center p-1 border border-sky-200 bg-sky-400 rounded-xl mt-3'>Sign in</button>
				</form>
			</div>
		</div>
	);
};

export default Auth;