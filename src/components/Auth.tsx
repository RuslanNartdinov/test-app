"use client"
import { setUser } from '@/features/userSlice';
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { getAccess, getUser } from '@/helpers/help';
import isValidPassword from '@/helpers/passwordValidator';
import { IAccessResponse } from '@/helpers/help';

interface AuthProps {
	isOpen: boolean;
	onClose: () => void;
  }
  
  const Auth: React.FC<AuthProps> = ({ isOpen, onClose }) => {
	const emailRef = React.useRef<HTMLInputElement>(null);
	const passwordRef = React.useRef<HTMLInputElement>(null);
	const [valid, setValid] = React.useState<boolean>(false);
	const [validInput, setValidInput] = React.useState<boolean>(true)
	const dispatch = useDispatch();
  
	const handleSubmit = async (event: React.FormEvent) => {
	  event.preventDefault();
	  const email = emailRef.current?.value;
	  const password = passwordRef.current?.value;
  
	  if (!(email && password)) {
		return;
	  }
  
	  try {
		const token : IAccessResponse = await getAccess({ email, password });
		console.log(token)
		localStorage.setItem('authed', 'true');
		localStorage.setItem('token', token.accessKey);
		localStorage.setItem('expires', token.expiresIn.toString());
  
		const userData = await getUser(token.accessKey);
		dispatch(setUser(userData));
  
		onClose();
		setValidInput(true);
	  } catch (error) {
		console.error('Error signing in:', error);
		setValidInput(false)
	  }
	};
  
	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
	  setValid(isValidPassword(event.target.value));
	};
  
	if (typeof window === 'undefined') return null;
  
	const portalRoot = document.getElementById('portal-root');
	if (!portalRoot || !isOpen) return null;

	return ReactDOM.createPortal(
	  <div className={`z-50 ${'animate-fade-in'} top-0 fixed w-full h-full flex items-center justify-center bg-opacity-75 bg-black`}>
		<div className='w-96 h-96 flex flex-col items-center justify-center rounded-xl bg-sky-900 p-4 border border-sky-200'>
		  <form className='text-xl flex items-center w-full h-full justify-center flex-col' onSubmit={handleSubmit}>
			<input
			  className='text-black rounded-xl h-7 border border-sky-200 mt-3 pl-5'
			  type="email"
			  ref={emailRef}
			  placeholder="Email"
			//  required
			/>
			<input
			  className='text-black rounded-xl h-7 border border-sky-200 mt-3 pl-5'
			  type="password"
			  ref={passwordRef}
			  placeholder="Password"
			  onChange={handlePassword}
			//  required
			/>
			{
			valid ? 
			<button
			  type="submit"
			  className='flex items-center justify-center p-1 px-3 border border-sky-200 bg-sky-400 rounded-xl mt-3'
			>
			  Sign in
			</button> 
			: 
			<div className="flex items-center justify-center p-1 px-3 border border-sky-200 bg-sky-800 rounded-xl mt-3">Sign in</div>
			}
		  </form>
		{validInput ? '' : <div className="flex items-center justify-center rounded-xl border border-red-600 bg-red-200 p-3 text-red-700 animate-fade-in">Invalid Input, please, try again</div>}
		</div>
	  </div>,
	  portalRoot
	);
};

export default Auth;