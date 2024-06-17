"use client"
import React from 'react';
import Profile from '@/components/Profile';
import { Provider } from 'react-redux';
import store from '@/store';

const page = () => {
	return (
		<>
		<Provider store={store}>
			<Profile/>
		</Provider>
		</>
	);
};

export default page;