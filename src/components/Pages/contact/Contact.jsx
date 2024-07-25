import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container">
      <div className="contact-us conatainer">
        <h1>CONTACT US</h1>
        <p>
          We'd love to here from you.Please fill out the form below or reach out
          to us using the contact details provided.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label>NAME</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label>EMAIL</label>
            <input type="email" id="EMAIL" required />
          </div>
          <div className="form-group">
            <label>MESSAGE</label>
            <textarea name="text" id="message " required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
