import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import './index.scss';

export default function Form() {

  const submitForm = () => {
    console.log('submit form');
    toast('Thanks for your message!')
  }

  return (
    <div className="form">
      <label>First Name
        <input type="text" name="first"></input>
      </label>
      <label>Last Name
        <input type="text" name="last"></input>
      </label>
      <label className="full" name="email">Email
        <input type="text"></input>
      </label>
      <label className="full" name="message">Message
        <textarea />
      </label>
      <button type="button" onClick={submitForm}>Submit</button>

      <ToastContainer />
    </div>
  )
}