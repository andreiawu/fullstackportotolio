import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <nav className='navbar'>
        <div className='logo-box'>
          <Link to="/home" className='logo-link'>
            <img src="/images/logo-icon.png" alt="logo" className='logo' />
          </Link>
        </div>
        <div className='links-box'>
          <ul className='navbar-ul'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}