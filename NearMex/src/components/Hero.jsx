import React from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './Hero.css';

const Hero = () => {
  console.log("Hero cargando...");
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
