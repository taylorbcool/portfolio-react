import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/HeaderStyles.scss';
  
const Header = (props) => {

  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <NavLink className='nav-btn animate1' to="/">Home</NavLink> 
        <NavLink className='nav-btn animate1' to="https://github.com/taylorbcool">GitHub</NavLink>
        <NavLink className='nav-btn animate1' to="/about">About</NavLink>
        <NavLink className='nav-btn animate1' to="/work">Work</NavLink>
        <NavLink className='nav-btn animate1' to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Header;