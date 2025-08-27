import React from "react"
import deviceImg from '../../assets/images/steering-wheel.png';
import './index.scss';

export default function Device() {


  return (
    <div className="device">
      <div className="device-content">
        <h1>DriveMode Device</h1>
        <p><b>Proprietary Hardware Device:</b> Our unique tech is captured in a compact device designed for easy installation</p>
        <p><b>Precise Driver Phone Detection:</b> Ultra-precise telematics identifies instances of phone use by the driver while the vehicle is moving above a threshold speed</p>
        <p><b>Tamper-Resistant Design:</b> The device plugs directly into the vehicle's OBD-ll port, making it difficult to circumvent and ensuring data integrity</p>
      </div>
      <div className="device-media">
        <img src={deviceImg} />
      </div>
    </div>
  )
}