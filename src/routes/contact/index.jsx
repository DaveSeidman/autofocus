import React from "react"
import Form from "../../components/form";
import contactImage from '../../assets/images/waving-sunroof.jpg'
import './index.scss';

export default function Contact() {

  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Let people know what to reach out about and what to expect after contacting you. Don't forget to choose a storage option for submissions</p>
        <p><a href="">email@example.com</a></p>
        <p><a href="">(555) 555-5555</a></p>
        <Form />
      </div>
      <div className="contact-media">
        <img src={contactImage} />
      </div>
    </div>
  )
}