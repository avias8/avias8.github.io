import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header glassy">
      <div className="header-content">
        <div className="logo">
          <img src="https://via.placeholder.com/150" alt="Logo" />
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile navigation">
          ☰
        </button>

        <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <ul className="submenu">
                <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
                <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
                <li><a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</a></li>
                <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
              </ul>
            </li>
            <li className={location.pathname === '/openai-test' ? 'active' : ''}>
              <Link to="/openai-test" onClick={() => setIsMobileMenuOpen(false)}>OpenAI Test</Link>
            </li>
            <li className={location.pathname === '/resume' ? 'active' : ''}>
              <Link to="/resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</Link>
            </li>
            <li className={location.pathname === '/malaria-inference' ? 'active' : ''}>
              <Link to="/malaria-inference" onClick={() => setIsMobileMenuOpen(false)}>Malaria Inference</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
