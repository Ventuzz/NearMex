import React from "react";
import './NavBar.css';
import ubicationIcon from '../assets/ubicationIcon.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src = {ubicationIcon} className="icon" /> NearMex 
      </div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Cerca de MI</li>
        <li>Acerca de nosotros</li>
      </ul>
      <div className="auth-buttons">
        <button className="btn-login">Iniciar sesión</button>
        <button className="btn-register">Registrarse</button>
        <div className="user-icon">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;

