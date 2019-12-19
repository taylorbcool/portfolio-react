import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';
  
const Header = () => {

  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <NavLink className='nav-btn animate1' to="/">Home</NavLink> 
        <NavLink className='nav-btn animate1' to="/github">GitHub</NavLink>
        <NavLink className='nav-btn animate1' to="/about">About</NavLink>
        <NavLink className='nav-btn animate1' to="/work">Work</NavLink>
        <NavLink className='nav-btn animate1' to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Header;