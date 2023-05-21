import React from 'react';
import NustImg from '../assets/QasidComplex.JPG';
import Navbar from './Navbar';

const NUST = () => {
    return (
        <div>
            <Navbar />
        <div className="w-full bg-cover p-5 opacity-70 absolute bottom-0 top-28" style={{backgroundImage:`url(${NustImg})`}}>
        <div className='flex items-center justify-center px-6 py-24 mx-auto my-56 lg:py-0'>
            <h1 className='text-5xl'>NUST PAGE</h1>
        </div>
        </div>
        </div>
    );
};

export default NUST;