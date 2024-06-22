import React, { useEffect, useRef, useState } from "react";
import styles from "./ContactStyle.module.css";
import axios from "axios";

function Contact() {
  const refForm = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/send-form",
        formData
      );
      console.log("response: ", response);
      if (response.data.success) {
        alert("Message successfully send!");
        window.location.reload(false);
      } else {
        alert("OOOPPS. Something went wrong!!!");
      }
    } catch (e) {
      alert("OOOPPS. Something went wrong!!! Please try again");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Let's Connect!</h1>
      <p>
        I'd love to hear from you! Whether it's a unique hobby, a creative idea,
        or a wild passion, <br></br> I'm eager to connect and learn about what
        drives you.
      </p>
      <br></br>
      <form onSubmit={sendEmail} action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          ></input>
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input type="submit" className="hover btn" value="Submit"></input>
      </form>
    </section>
  );
}

export default Contact;
