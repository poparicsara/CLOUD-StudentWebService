import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {

    const links = ["STUDENTS", "PROFESSORS"]

    return(
        <div className='flex w-full bg-stone-900 text-xl text-white'>
            <div className='h-20 ml-5 mt-2'>
                <img className='h-5/6 mt-1' src={logo} alt="Logo"/>
            </div>
            <div className='flex ml-auto mt-8 mr-8' >
                {links.map((link) => (
                    <div className='mr-16 cursor-pointer ' key={link}>{link}</div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
