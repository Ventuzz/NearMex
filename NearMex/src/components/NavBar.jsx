import React from "react";
import './NavBar.css';
import logo from './NEARMEX.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="NearMex logo" className="logo-img" />
        <span>NearMex</span>
      </div>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Cerca de MI</li>
        <li>Acerca de nosotros</li>
      </ul>

      <div className="auth-buttons">
        <button className="btn-login">Iniciar sesión</button>
        <button className="btn-register">Registrarse</button>
        <div className="user-icon"></div>
      </div>
    </nav>
  );
};

export default Navbar;
