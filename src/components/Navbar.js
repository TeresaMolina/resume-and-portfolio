import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We’ll create this next

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My Portfolio</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
