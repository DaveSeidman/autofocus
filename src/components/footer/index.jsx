import React from "react";
import './index.scss';

export default function Footer() {


  return (
    <div className="footer">
      <div className="footer-logo">
        <h2>AutoFocus</h2>
      </div>
      <div className="footer-contact">
        <h2>Contact</h2>
        <a href="">contact@autofocusapps.com</a>
        <a href="">(555) 555-5555</a>
      </div>
    </div>
  )
}