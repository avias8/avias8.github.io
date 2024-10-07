// src/Navbar.js
import React from 'react';
import './Navbar.css'; // Create a separate CSS file for Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My React App</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;