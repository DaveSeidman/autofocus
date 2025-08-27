import React from "react";
import Form from "../../components/form";
import driveModeImg from '../../assets/images/mountain-road.jpg';
import missionImg from '../../assets/images/mountain-road.jpg';
import './index.scss';


export default function Home() {

  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-background"></div>
        <h1 className="home-hero-title">Revolutionizing Road Safety by Elimination Distracted Driving</h1>
      </div>
      <div className="home-product">
        <div className="home-product-drivemode">
          <img src={driveModeImg} />
          <h2>DriveMode Device</h2>
          <p>A compact smart device that leverages ultra-precise, next-gen telematics to prevent texting and app use, ensuring the driver's focus stays on the road.</p>
        </div>
        <div className="home-product-drivemode">
          <img src={driveModeImg} />
          <h2>FocusMode Device</h2>
          <p>A companion mobile app that puts your phone into voice-activated mode while driving. Drivers can send messages, take calls and navigate, completely hands-fee.</p>
        </div>
      </div>
      <div className="home-mission">
        <div className="home-mission-media">
          <img src={missionImg} />
        </div>
        <div className="home-mission-content">
          <h1 className="home-mission-title">Our Mission</h1>
          <p>Distracted driving isn't just an inconvenience. It results in 300,000 accidents annually in the US.</p>
          <p>AutoFocus is committed to addressing this problem with:</p>
          <ol>
            <li>Accurate Phone Detection: We identify phone use by the driver with unparalleled precision</li>
            <li>Safer Alternatives: We offer voice-driven texting and navigation, eliminating need for manual phone interaction</li>
            <li>Incentivized Safe Behavior: We empower insurance companies to reward policyholders</li>
          </ol>
        </div>
      </div>
      <div className="home-contact">
        <div className="home-contact-content">
          <h1>Contact Us</h1>
          <p>Interested in AutoFocus? Fill out some info and we will be in touch shortly. We can't wait to hear from you!</p>
        </div>
        <div className="home-contact-form">
          <Form />
        </div>
      </div>
    </div>
  )
}