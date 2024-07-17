import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './index.css'
import logo from '../Assets/logo.jpg'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) {
      showNavbar();
    }
  };

  const scrollToFooter = () => {
    scrollToSection('footer');
  };

  return (
    <Router>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav ref={navRef}>
          <Link to="/#home" smooth={true} onClick={() => scrollToSection('home')}> Home</Link>
          <Link to="/#products" smooth={true} onClick={() => scrollToSection('products')}>Products</Link>
          <Link to="/#team" smooth={true} onClick={() => scrollToSection('team')}>The Team</Link>
          <Link to="/#about" smooth={true} onClick={scrollToFooter}>About Us</Link>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars className="bars" />
        </button>
      </header>
    </Router>
  );
}

export default Navbar;