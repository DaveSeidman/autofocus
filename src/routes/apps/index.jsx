import React from "react"
import appImage from '../../assets/images/phone-dashboard.png';
import './index.scss';

export default function Apps() {


  return (
    <div className="apps">
      <div className="apps-content">
        <h1>FocusMode App</h1>
        FocusMode App *
        <p><b>Cross-Platform Compatibility:</b> Android and iOS devices Realtime</p>
        <p><b>User-Friendly Integration:</b> Designed for easy setup and seamless adoption</p>
        <p><b>Speed Monitoring:</b> App leverages existing UBI to track vehicle speed and provide contextual driving data</p>
        <p><b>Automatic Discount Reporting:</b> App securely reports qualifying safe driving data to insurers, enabling policy discounts</p>
      </div>
      <div className="apps-media">
        <img src={appImage} />
      </div>
    </div>
  )
}