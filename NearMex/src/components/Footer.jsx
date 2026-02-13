import React from "react";
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} NearMex | Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
