import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='logo-box'>
          <Link to="/home" className='logo-link'>
            <img src="/images/logo-icon.png" alt="logo" className='logo' />
          </Link>
        </div>
        <div className={`links-box ${menuOpen ? 'open' : ''}`}>
          <ul className='navbar-ul'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className='hamburger-menu' onClick={toggleMenu}>
          <img src="/images/hamburguer-menu.png" alt="hamburguer-menu" className="hamburger-icon" />
          <div className={`line ${menuOpen ? 'open' : ''}`} />
          <div className={`line ${menuOpen ? 'open' : ''}`} />
          <div className={`line ${menuOpen ? 'open' : ''}`} />
        </div>
      </nav>
    </header>
  );
}