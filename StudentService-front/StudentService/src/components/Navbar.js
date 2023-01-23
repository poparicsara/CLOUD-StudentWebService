import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {

    const links = ["STUDENTS", "PROFESORS"]

    return(
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img className='navbar-logo-img' src={logo} alt="Logo"/>
            </div>
            <div className='navbar-links' style={{"marginLeft": "auto"}}>
                {links.map((link) => (
                    <div className='navbar-link' key={link}>{link}</div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
