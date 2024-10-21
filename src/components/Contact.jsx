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

        {/* Google Maps Embed */}
        <div className="map-container">
          <iframe
            title="Google Maps Calgary"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100345.54493435022!2d-114.16927329526596!3d51.02784775426898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371706b86f257b7%3A0xc0f38fe917e1d0a9!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1697988485792!5m2!1sen!2sus"
            width="100%"
            height="450px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
