import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo and title */}
        <div className="logo">
          <img src="https://via.placeholder.com/150" alt="Logo" />
        </div>

        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="navbar-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/openai-test' ? 'active' : ''}>
              <Link to="/openai-test">OpenAI Test</Link>
            </li>
            <li className={location.pathname === '/resume' ? 'active' : ''}>
              <Link to="/resume">Resume</Link>
            </li>
            {/* Add more navigational links if needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;