import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className='navbar'>
        <div className='logo-box'>
          <a className='logo-link'>
            <img src="/images/logo-icon.png" alt="logo" className='logo'/>
          </a>
        </div>
        <div className='links-box'>
          <ul className='navbar-ul'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}