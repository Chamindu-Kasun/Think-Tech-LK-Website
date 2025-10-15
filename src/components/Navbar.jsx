import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-wrapper">
      <header className="header">
        <div className="navbar-container">
          <div className="logo">
            <a href="/">
              <span className="logo-text">THINK-TECH-LK</span>
            </a>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
              <li><a href="#videos" onClick={() => setIsMenuOpen(false)}>Videos</a></li>
              <li><a href="#articles" onClick={() => setIsMenuOpen(false)}>Articles</a></li>
              <li><a href="#publications" onClick={() => setIsMenuOpen(false)}>Publications</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
              <li className="theme-toggle-wrapper"><ThemeToggle /></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="quote-contact">
        <blockquote className="quote">
          <span className="highlight">"Don't judge each day</span> by the harvest you reap but by the seeds you plant" 🌾🌾🎓
        </blockquote>
        <p className="contact">Contact: +94764629040</p>
      </div>
    </div>
  );
};

export default Navbar;