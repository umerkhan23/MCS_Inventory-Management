import React from 'react';
import CadetWingImg from '../assets/CadetWing.jpg';
import Navbar from './Navbar';

const CadetWing = () => {
    return (
        <div className="w-full bg-cover   absolute bottom-0 top-0" style={{backgroundImage:`url(${CadetWingImg})`}}>
            <Navbar />
        <div className='flex items-center opacity-70 justify-center px-6 py-24 mx-auto my-56 lg:py-0'>
            <h1 className='text-5xl text-white'>Cadet Wing Page</h1>
        </div>
        </div>
    );
};

export default CadetWing;