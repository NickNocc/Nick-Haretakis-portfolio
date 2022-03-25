import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "../../assets/img/phone.png";
import Email from "../../assets/img/email.png";
import GitHub from "../../assets/img/GitHub.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

function ContactForm() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  const sumbitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xlkt6yk",
        "template_zd2jr4f",
        formRef.current,
        "413IWZuTinuLReq7s"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact Info</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img className="contact-icon" src={Phone} alt="" />
              1-(951)-200-1966
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              NickHaretakis@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={GitHub} alt="" />
              <a href="https://github.com/NickNocc">Github.com/NickNocc</a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">Send me an email!</p>
          <form ref={formRef} onSubmit={sumbitHandler}>
            <input
              style={{ backgroundColor: darkMode && "#D07632" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#D07632" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#D07632" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#D07632" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
