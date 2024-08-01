import React, { useState } from 'react';
import logo from '../img/logo.png';
import burger_icon from '../img/burger_icon.png';
import '../App.css'; // Import your CSS file


function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`navbar-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <img src={burger_icon} alt="Menu" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;

