import React from "react";
import './index.scss';

export default function Form() {

  return (
    <div className="form">
      <label>First Name
        <input type="text"></input>
      </label>
      <label>Last Name
        <input type="text"></input>
      </label>
      <label className="full">Email
        <input type="text"></input>
      </label>
      <label className="full">Message
        <textarea />
      </label>
    </div>
  )
}