import React from 'react';
import SOMImg from '../assets/Lounge-160.jpg';

const SOM = () => {
    return (
        <div className="w-full bg-cover p-5 opacity-70 absolute bottom-0 top-28" style={{backgroundImage:`url(${SOMImg})`}}>
        <div className='flex items-center justify-center px-6 py-24 mx-auto my-56 lg:py-0'>
            <h1 className='text-5xl'>SOM PAGE</h1>
        </div>
        </div>
    );
};

export default SOM;