import React from 'react';
import addLogo from '../assets/addLogo.png';
import MCSImg from '../assets/NSAutidorium.jpg';

import { Link } from 'react-router-dom';

const MCS = () => {
    return (
        <div className="w-full bg-cover p-5 opacity-70 absolute bottom-0 top-28" style={{backgroundImage:`url(${MCSImg})`}}>
            <div className="flex items-center justify-center space-x-16">
                <Link to="/home">
                    <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                        <img src={addLogo} alt="" />
                        <h4 className="text-xl font-bold">P&R</h4>
                    </div></Link>
                <Link to='/CHQ'>
                    <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                        <img src={addLogo} alt="" />
                        <h4 className="text-xl font-bold">CHQ</h4>
                    </div>
                    </Link>
                <Link to='/CWing'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={addLogo} alt="" />
                    <h4 className="text-xl font-bold">CWING</h4>
                </div>
                </Link>
            </div>
            <div className="flex items-center justify-center space-x-16">
                <Link to='/EWing'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={addLogo} alt="" />
                    <h4 className="text-xl font-bold">EWING</h4>
                </div>
                </Link>
                <Link to='/CadetWing'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={addLogo} alt="" />
                    <h4 className="text-xl font-bold">Cadet Wing</h4>
                </div>
                </Link>
                <Link to='/MISC'>
                <div className="flex flex-col justify-center items-center space-y-2 hover:cursor-pointer hover:underline h-48 w-48  m-4">
                    <img src={addLogo} alt="" />
                    <h4 className="text-xl font-bold">MISC</h4>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default MCS;