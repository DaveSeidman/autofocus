import React from "react";
import logo from '../../assets/images/logo.svg';
import './index.scss';

export default function Footer() {

  return (
    <div className="footer">
      <div className="footer-logo">
        <img className="footer-logo-image" src={logo} />
      </div>
      <div className="footer-contact">
        <h2>Contact</h2>
        <a href="">contact@autofocusapps.com</a>
        <a href="">(555) 555-5555</a>
      </div>
    </div>
  )
}