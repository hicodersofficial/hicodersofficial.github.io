import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact" id="connect">
      <div>
        <h1>Let's Connect</h1>
        <img src="/assets/connect.png" data-aos="flip-right" />
      </div>
      <form data-aos="zoom-in">
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Enter title or subject" />
        <textarea placeholder="Brief description of your project"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
