import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>Email: <a href="mailto:HarshvardhanV98@gmail.com">HarshvardhanV98@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>Phone: (780) 747-3319</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Location: Calgary, AB, Canada</p>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/avias8" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://linkedin.com/in/avivarma" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.." required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email.." required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.." required></textarea>

            <button type="submit" className="contact-submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
