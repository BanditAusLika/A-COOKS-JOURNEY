import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/recipes">Recipes</a>
      <a href="/gallery">Gallery</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </nav>
  );
};

export default Navbar;
