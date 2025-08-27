import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import './index.scss';

export default function Form() {

  const submitForm = () => {
    toast('Thanks for your message!')
  }

  return (
    <div className="form">
      <form action="https://formsubmit.co/daveseidman@gmail.com" method="POST">
        <label>First Name
          <input type="text" name="first" />
        </label>
        <label>Last Name
          <input type="text" name="last" />
        </label>
        <label className="full" name="email">Email
          <input type="text" name="email" />
        </label>
        <label className="full" name="message">Message
          <textarea name="message" />
        </label>
        <input type="hidden" name="_next" value={location.href} />
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit" onClick={submitForm}>Submit</button>
      </form>
      <ToastContainer />
    </div >
  )
}