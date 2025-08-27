import React from "react"
import './index.scss';

export default function Faqs() {


  return (
    <div className="faqs">
      <div className="faqs-hero">
        <div className="faqs-hero-background"></div>
        <div className="faqs-hero-title">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="faqs-questions">
        <p className="question">What problem does AutoFocus solve?</p>
        <p>Distracted driving results in 300,000 accidents annually in the US with phone use being the biggest distraction. In addition to the lives lost, the total cost of distracted driving is $40B per year.</p>
        <p className="question">What makes our technology unique?</p>
        <p>Our software combined with ultra-precise telematics ensures accurate and reliable data collection. Our mobile app is designed for setup under 5 minutes and seamless adoption.</p>
        <p>The device also plugs directly into the vehicle's OBD-II port, making it difficult to circumvent and ensuring data integrity.</p>
        <p className="question">What is our value proposition?</p>
        <p>Partnership with insurers - we license our technology to insurance companies, who integrate AutoFocus into their UBI programs</p>
        <p>Significant consumer savings - with an average US policy at $1200/year and UBI discounts of 25% ($300/year)</p>
        <p>Rapid ROI for users - AutoFocus pays for itself within the first year through insurance premium discounts</p>
        <p className="question">Who is on our team?</p>
        <p>The AutoFocus founding team brings deep experience in financial technology, software development and innovation. We’ve built and scaled products at companies from Blackstone to Google.</p>
      </div>
    </div>
  )
}