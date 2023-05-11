import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import newLogo from '../assets/New-logo.png';
import searchLogo from '../assets/searchLogo.png';
import updateLogo from '../assets/updateLogo.png';
import reportLogo from '../assets/reportLogo.png';
import procLogo from '../assets/localproc.png';
import condemnationLogo from '../assets/condemnation.png';
import settingLogo from '../assets/setting.png';
import spdataLogo from '../assets/sp-data.png';
import MCSImg from '../assets/TajBlock.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    // window.onload= function(){
    //     // setInterval(time , 1000);
    //     console.log("hello");
    // };
    useEffect(() => {
        if (!(localStorage.getItem('id'))) {
            navigate('/')
        }
    });
    return (
        <div className="w-full bg-cover p-5 opacity-70 absolute bottom-0 top-28" style={{backgroundImage:`url(${MCSImg})`}}>
        <div className="h-full">


            <div className="flex items-center justify-center space-x-16">
                <Link to="/new">
                    <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                        <img src={newLogo} alt="" />
                        <h4 className="text-xl font-bold">New</h4>
                    </div></Link>
                <Link to='/search'>
                    <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                        <img src={searchLogo} alt="" />
                        <h4 className="text-xl font-bold">Search</h4>
                    </div></Link>
                <Link to='/update'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={updateLogo} alt="" />
                    <h4 className="text-xl font-bold">Update</h4>
                </div>
                </Link>
                <Link to='/report'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={reportLogo} alt="" />
                    <h4 className="text-xl font-bold">Report</h4>
                </div></Link>
            </div>
            <div className="flex items-center justify-center space-x-16">
                <Link to='/localProc'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={procLogo} alt="" />
                    <h4 className="text-xl font-bold">Local Proc</h4>
                </div>
                </Link>
                <Link to='/condemnation'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={condemnationLogo} alt="" />
                    <h4 className="text-xl font-bold">Condemnation</h4>
                </div>
                </Link>
                <Link to='/spdata'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={spdataLogo} alt="" />
                    <h4 className="text-xl font-bold">Manage Sp Data</h4>
                </div>
                </Link>
                <Link to='/setting'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={settingLogo} alt="" />
                    <h4 className="text-xl font-bold">Setting</h4>
                </div>
                </Link>
            </div>
            <div></div>
        </div>
        </div>
    );
}

export default Home;