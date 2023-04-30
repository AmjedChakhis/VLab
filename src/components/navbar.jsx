import React, { Component } from 'react';
import { Link } from 'react-scroll';

import './css components/navbar.css'
function Navbar() {
    return(<header className="header">
    <a href="#" className="logo"><span className='V'>V</span>Lab.</a>
    <nav className="navbar">
    <Link to="home" smooth={true} duration={1000} >Accueil</Link>
    <Link to="Services" smooth={true} duration={1000}>Demande de service</Link>
    <Link to="ct" smooth={true} duration={1000}>Contact</Link>
    <Link to="Login" smooth={true} duration={1000}>Accès privé</Link>
    </nav>
 </header>)
    
  }
export default Navbar;