import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll to section smoothly when clicking on submenu links
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="header glassy">
      <div className="header-content">
        <div className="logo">
          <img src="logo512.png" alt="Logo" />
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile navigation"
        >
          ☰
        </button>

        <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <ul className="submenu">
                <li><a href="#about" onClick={() => scrollToSection('about-section')}>About</a></li>
                <li><a href="#skills" onClick={() => scrollToSection('skills-section')}>Skills</a></li>
                <li><a href="#projects" onClick={() => scrollToSection('projects-section')}>Projects</a></li>
                <li><a href="#experience" onClick={() => scrollToSection('experience-section')}>Experience</a></li>
                <li><a href="#education" onClick={() => scrollToSection('education-section')}>Education</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact-section')}>Contact</a></li>
              </ul>
            </li>
            <li className={location.pathname === '/resume' ? 'active' : ''}>
              <Link to="/resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</Link>
            </li>
            <li className={location.pathname === '/openai-test' ? 'active' : ''}>
              <Link to="/openai-test" onClick={() => setIsMobileMenuOpen(false)}>OpenAI Test</Link>
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
