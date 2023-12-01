import React, { useRef } from "react";
import "./Contact.css";
import lin from "../../assets/icons8-linkedin-logo-48.png";
import ins from "../../assets/icons8-instagram-48.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o5npvhq",
        "template_945igqo",
        form.current,
        "6OsRuNh7fIc7lh4SlNEsE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="Contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="your email"
            email="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="your message"
          />
          <br />
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
          <div className="links">
            <img src={lin} alt="" className="link" />
            <img src={ins} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
