import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import './index.scss';


export default function Nav() {
  const location = useLocation();
  const route = location.pathname.split('/')[1];

  return (
    <div className="nav">
      <a className="nav-link" href="/autofocus/"><img src={logo} /></a>
      <a className={`nav-link ${route === 'device' ? 'active' : ''}`} href="device">Device</a>
      <a className={`nav-link ${route === 'apps' ? 'active' : ''}`} href="apps">Apps</a>
      <a className={`nav-link ${route === 'faqs' ? 'active' : ''}`} href="faqs">FAQs</a>
      <a className={`nav-link ${route === 'contact' ? 'active' : ''}`} href="contact">Contact</a>
    </div>
  )
}