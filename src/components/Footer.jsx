import React from 'react';
import logo from '../assets/Consult-Park-Logo-Full.png'; 
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="footer-text">
        <p>© 2023 Consult Park. All rights reserved.</p>
        <p>Empowering businesses with world-class talent.</p>
      </div>
    </footer>
  );
};

export default Footer;
