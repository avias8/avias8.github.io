import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">

        {/* Crazy Golf VR Project */}
        <div className="project-card">
          <h3>Crazy Golf VR</h3>
          <p>A VR mini-golf game available on Meta's App Lab, designed to provide an immersive and fun golfing experience. The game has garnered over 15,000 installs and has an active user base.</p>
          <p className="technologies"><strong>Technologies:</strong> Unity, C#, Oculus Integration, XR Interaction Toolkit</p>
          <a href="https://www.meta.com/experiences/7242557155836637/" target="_blank" rel="noopener noreferrer" className="project-link">View on App Lab</a>
        </div>

        {/* Malaria Detection Capstone Project */}
        <div className="project-card">
          <h3>Malaria Detection Capstone</h3>
          <p>Developed a deep learning model to detect malaria from red blood cell images with 99% accuracy, leveraging TensorFlow and Keras. The frontend was created with React to allow users to interactively classify cell images.</p>
          <p className="technologies"><strong>Technologies:</strong> TensorFlow, Keras, React, Flask, Docker</p>
          <a href="https://github.com/avias8/malaria-inference-frontend/tree/Source" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
        </div>

        {/* TheraConnect Project */}
        <div className="project-card">
          <h3>TheraConnect</h3>
          <p>A VR platform aimed at providing accessible therapeutic services, including exposure therapy, in a calming virtual environment. Developed with Unity and Photon Engine to allow therapists to connect with patients remotely in an immersive way.</p>
          <p className="technologies"><strong>Technologies:</strong> Unity, C#, Photon Engine, Azure Cognitive Services</p>
          <a href="https://theraconnect.ca" target="_blank" rel="noopener noreferrer" className="project-link">Learn More</a>
        </div>

        {/* Virtual Realty 360 Project */}
        <div className="project-card">
          <h3>Virtual Realty 360</h3>
          <p>Developed a VR platform for immersive real estate tours, providing users with 360-degree views of properties. The application aims to enhance the real estate shopping experience by providing a virtual walk-through of listings.</p>
          <p className="technologies"><strong>Technologies:</strong> Unity, Photon Engine, Meta XR SDKs, Gaussian Splatting</p>
          <a href="https://virtualrealty360.com" target="_blank" rel="noopener noreferrer" className="project-link">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
