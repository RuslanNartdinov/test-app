import React from 'react';

const page = (props : {name : string, image : string, email : string}) => {
	return (
		<div className='my-10 w-full h-full flex items-center justify-center'>
			<div className="p-2 w-52 h-64 border rounded-xl border-sky-300 bg-sky-400">
				<div className="w-full h-10 bg-sky-700 rounded-xl">{props.name}</div>
				<div className="mt-2 w-full h-28 bg-sky-700 rounded-xl">{props.image}</div>
				<div className="mt-2 w-full h-16 bg-sky-700 rounded-xl">{props.email}</div>
			</div>
		</div>
	);
};

export default page;