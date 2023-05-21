import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MCSImg from '../assets/Main.jpg';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Home2 = () => {
    const navigate = useNavigate();

    // window.onload= function(){
    //     // setInterval(time , 1000);
    //     console.log("hello");
    // };
    useEffect(() => {
        localStorage.setItem('state',"process")
        if (!(localStorage.getItem('id'))) {
            navigate('/')
        }
    });
    return (
        <div>
            <Navbar />
        <div className="w-full bg-cover p-5 opacity-70 absolute bottom-0 top-28" style={{backgroundImage:`url(${MCSImg})`}}>
        <div className="">


            <div className="flex items-center my-32 justify-center space-x-16">
                <Link to="/MCS">
                    <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer h-48 w-48  m-4">
                        <h4 className="border-blue-600 border-spacing-1 border-solid border-4 p-3 rounded-2xl hover:bg-blue-600 text-2xl shadow-lg shadow-[cyan] font-bold text-slate-900 bg-white w-48">MCS</h4>
                    </div></Link>
                <Link to='/NUST'>
                    <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer h-48 w-48  m-4">
                        <h4 className="border-blue-600 border-spacing-1 border-solid border-4 p-3 rounded-2xl hover:bg-blue-600 text-2xl shadow-lg shadow-[cyan] font-bold text-slate-900 bg-white w-48">NUST</h4>
                    </div>
                    </Link>
                <Link to='/CadetHostal'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer h-48 w-48  m-4">
                    <h4 className="border-blue-600 border-spacing-1 border-solid border-4 p-3 rounded-2xl hover:bg-blue-600 text-2xl shadow-lg shadow-[cyan] font-bold text-slate-900 bg-white w-48">Cadet Hostel</h4>
                </div>
                </Link>
                <Link to='/SOM'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer h-48 w-48  m-4">
                    <h4 className="border-blue-600 border-spacing-1 border-solid border-4 p-3 rounded-2xl hover:bg-blue-600 text-2xl shadow-lg shadow-[cyan] font-bold text-slate-900 bg-white w-48">SOM</h4>
                </div>
                </Link>
            </div>
        </div>
        </div></div>
    );
};

export default Home2;