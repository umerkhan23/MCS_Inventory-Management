import React from 'react';
import CHQImg from '../assets/CHQ.jpg';
import Navbar from './Navbar';

const CHQ = () => {
    return (
        <div>
            <Navbar />
        <div className="w-full bg-cover p-5 opacity-70 absolute bottom-0 top-28" style={{backgroundImage:`url(${CHQImg})`}}>
        <div className='flex items-center justify-center px-6 py-24 mx-auto my-56 lg:py-0'>
            <h1 className='text-5xl'>CHQ PAGE</h1>
        </div>
        </div>
        </div>
    );
};

export default CHQ;