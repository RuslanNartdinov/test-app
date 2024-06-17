import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store'
import { getUser } from '@/helpers/help';
import { setUser } from '@/features/userSlice';
import { AppDispatch } from '@/store';

const Profile = () => {
	const data = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch<AppDispatch>()
	React.useEffect(()=>{
		if(localStorage.getItem("authed") === "true")
		{
			const key = localStorage.getItem("token")
			if(!key)
				return;
			const handleAuth = async () => {
				const result = await getUser(key)
				dispatch(setUser(result))
			}
			handleAuth()
		}
	},[dispatch])
	return (
		<div className='sm:text-2xl animate-fade-in my-10 w-full h-screen flex items-center justify-center'>
			<div className="box-border w-9/12 p-4 h-3/4 border rounded-xl border-sky-300 bg-sky-400">
				<div className="h-1/6 w-full bg-sky-700 rounded-xl flex items-center justify-center">User Name: {data.user.firstName + ' ' + data.user.lastName}</div>
				<div className="h-4/6 mt-1 w-full bg-sky-700 rounded-xl flex items-center justify-center">Email: {data.user.email}</div>
				<div className="h-1/6 mt-1 w-full bg-sky-700 rounded-xl flex items-center justify-center">Age: {data.user.age}</div>
			</div>
		</div>
	);
};

export default Profile;