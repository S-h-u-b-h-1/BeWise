import React, { useState } from "react";
import "../styles/Contact.css";

const ContactInputBox = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="contact-input-box">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="contact-input"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const ContactTextArea = ({ row, name, placeholder, value, onChange }) => {
  return (
    <div className="contact-input-box">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="contact-textarea"
        required
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

const Contact = () => {
  const [messageVisible, setMessageVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/movdebpo",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessageVisible(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setTimeout(() => setMessageVisible(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {   
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="contact-info-title">Contact Us</span>
            <h2 className="contact-info-heading">GET IN TOUCH WITH US</h2>
            <p className="contact-info-text">
              Have trouble managing your travel budget? Need assistance
              with our planning tool or want to share feedback? Reach out to us!
              We're here to help you make the most of your travel expenses.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon-container">
                <span className="contact-info-icon">&#128205;</span>
              </div>
              <div className="contact-info-details">
                <h4>Our Location</h4>
                <h5>Sonipat, Delhi NCR</h5>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-container">
                <span className="contact-info-icon">&#9742;</span>
              </div>
              <div className="contact-info-details">
                <h4>Phone Number</h4>
                <h5>+91 9876543212</h5>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon-container">
                <span className="contact-info-icon">&#9993;</span>
              </div>
              <div className="contact-info-details">
                <h4>Email Address</h4>
                <h5>bewise.support@hmail.com</h5>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <ContactInputBox
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <ContactInputBox
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <ContactInputBox
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <ContactTextArea
              row="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}

            />
            <button type="submit" className="contact-button">
              Send Message
            </button>
            {messageVisible && (
              <p className="form-message">
                Thank you! We'll get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
