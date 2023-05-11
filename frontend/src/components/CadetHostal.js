import React from 'react';
import hostalImg from '../assets/Fatima-company.jpg';

const CadetHostal = () => {
    return (
        <div className="w-full bg-cover p-5 opacity-70 absolute bottom-0 top-28" style={{backgroundImage:`url(${hostalImg})`}}>
        <div className='flex items-center justify-center px-6 py-24 mx-auto my-56 lg:py-0'>
            <h1 className='text-5xl'>Cadet Hostal Page</h1>
        </div>
        </div>
    );
};

export default CadetHostal;