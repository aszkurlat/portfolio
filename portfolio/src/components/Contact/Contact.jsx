import "./Contact.css";
import phone from "/phone.png";
import email from "/email.png";
import address from "/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lokykku",
        "template_1q35lil",
        formRef.current,
        "w8ewlX15E82xem-Io"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    formRef.current.reset();
  };
  const inputStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#dfdfdf" : "#000",
  };

  return (
    <div className="contact-container" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +48 577 663 855
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={email} alt="email" />
              szkurlatagnieszka@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={address} alt="" />
              01-045 Warsaw, Poland
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b style={{ fontSize: "1.6rem" }}>
              Interested in Working Together?
            </b>
            &nbsp; Let's start something great! Feel free to reach out to me
            using the form below. I'm looking forward to hearing from you.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={inputStyle}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={inputStyle}
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="subject-input"
            />
            <input
              style={inputStyle}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={inputStyle}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done &&
              " Thank you, your email has been sent. I will respond to it shortly."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
