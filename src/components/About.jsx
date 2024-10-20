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
                    <p className="contact-info">
                        Calgary, AB, Canada | (780) 747-3319 | <a href="mailto:HarshvardhanV98@gmail.com">HarshvardhanV98@gmail.com</a>
                    </p>
                    <div className="links">
                        <a href="http://avivarma.ca" target="_blank" rel="noopener noreferrer">avivarma.ca</a> | 
                        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
                        <a href="https://github.com/YOUR_GITHUB_PROFILE" target="_blank" rel="noopener noreferrer"> GitHub</a>
                    </div>
                    <p className="about-description">
                        Hi, I'm Avi! I'm a software engineer with a background in mechanical engineering. 
                        I have extensive experience in building full-stack applications, VR/AR apps, and machine learning projects. 
                        I’m passionate about creating cutting-edge solutions that push the boundaries of both engineering and software development, 
                        connecting the digital world to the real one.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;