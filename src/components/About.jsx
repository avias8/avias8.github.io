import React from 'react';
import './About.css'; 
import profileImage from '../images/avivarma.jpeg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="image-container">
                    <img src={profileImage} alt="Avi Varma" className="profile-image" />
                </div>
                <div className="about-content">
                    <h1 className="name">Avi Varma</h1>
                    <h2 className="title">Software Engineer specializing in 3D Simulation, Modeling & Data Science</h2>
                    <div className="contact-info">
                        <p className="contact-item">
                            <span className="contact-icon">📍</span> Calgary, AB, Canada
                        </p>
                        <p className="contact-item">
                            <span className="contact-icon">📞</span> (780) 747-3319
                        </p>
                        <p className="contact-item">
                            <span className="contact-icon">✉️</span> <a href="mailto:HarshvardhanV98@gmail.com">HarshvardhanV98@gmail.com</a>
                        </p>
                    </div>
                    <div className="links">
                        <a href="http://avivarma.ca" target="_blank" rel="noopener noreferrer">avivarma.ca</a>
                        <a href="https://www.linkedin.com/in/avivarma/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/avias8" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className="about-description">
                        <p>
                            Hi, I'm <strong>Avi Varma</strong>, a passionate Software Engineer with a background in <strong>Mechanical Engineering</strong>. With a love for blending engineering principles with cutting-edge technology, I've built expertise in <strong>3D Simulation</strong>, <strong>Modeling</strong>, and <strong>Data Science</strong>. 
                        </p>
                        <p>
                            My journey has taken me from working on VR/AR applications that create immersive experiences, to full-stack development projects that provide robust, real-world solutions. I launched my own VR game—<strong>Crazy Golf VR</strong>—which has reached over 18,000 installs, showing my dedication to innovative and impactful projects.
                        </p>
                        <p>
                            Currently, I'm focused on combining my experience in software engineering with data-driven insights to build <strong>scalable</strong> and <strong>intelligent systems</strong>. I’m particularly fascinated by leveraging AI and machine learning to solve complex, real-world problems.
                        </p>
                        <p>
                            I believe in constantly pushing boundaries and learning new skills. Whether it’s diving into advanced data science techniques or creating tools for interactive 3D environments, I strive to keep improving and making meaningful contributions to the industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
