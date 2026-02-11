import React from 'react';
import Navbar from './NavBar';
import SearchBar from './SearchBar';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="hero-content">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;