import React from "react";
import "./contact.css";
import { MdEmail, MdOutlineLocationOn, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact" style={{ padding: "50px 100px" }}>
      <div className="content" style={{ textAlign: "center" }}>
        <h2 style={{ color: "var(--color-subtext)" }}>Contact Us</h2>
        <p
          style={{
            padding: "10px 20px",
            margin: "auto",
            color: "var(--color-text)",
          }}
        >
          As our client you are free to ask us anything about the company and if
          you are experiencing problems with our services you are free to
          contact us. We will email you as soon as possible and resolve the
          issue as soon as possible.
        </p>
      </div>
      <div className="contact__container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <MdOutlineLocationOn />
            </div>
            <div className="contact__text">
              <h3>Address</h3>
              <p>Gitaru</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <MdEmail />
            </div>
            <div className="contact__text">
              <h3>Email</h3>
              <p>benconne40@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <MdPhone />
            </div>
            <div className="contact__text">
              <h3>Phone</h3>
              <p>0748299409</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type your message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
