//import React from 'react';
//import { useSelector } from 'react-redux';
//import { RootState } from '@/store'

//const Profile = () => {
//	const data = useSelector((state: RootState) => state.user);
//	return (
//		<div className='my-10 w-full h-full flex items-center justify-center'>
//			<div className="p-2 w-52 h-64 border rounded-xl border-sky-300 bg-sky-400">
//				<div className="w-full h-10 bg-sky-700 rounded-xl flex items-center justify-center">{data.user.firstName + ' ' + data.user.lastName}</div>
//				<div className="mt-2 w-full h-28 bg-sky-700 rounded-xl flex items-center justify-center">{data.user.email}</div>
//				<div className="mt-2 w-full h-16 bg-sky-700 rounded-xl flex items-center justify-center">{data.user.age}</div>
//			</div>
//		</div>
//	);
//};

//export default Profile;