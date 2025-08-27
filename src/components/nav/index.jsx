import React from "react";
import './index.scss';


export default function Nav() {


  return (
    <div className="nav">
      <a className="nav-link" href="/">AutoFocus</a>
      <a className="nav-link" href="device">Device</a>
      <a className="nav-link" href="apps">Apps</a>
      <a className="nav-link" href="faqs">FAQs</a>
      <a className="nav-link" href="contact">Contact</a>
    </div>
  )
}