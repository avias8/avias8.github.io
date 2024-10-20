import React from 'react';
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Crazy Golf VR</h3>
        <p>A VR mini-golf game available on App Lab.</p>
        <a href="https://www.meta.com/experiences/7242557155836637/">View on App Lab</a>
      </div>
      <div className="project">
        <h3>Malaria Detection Capstone</h3>
        <p>Using deep learning to detect malaria from red blood cells.</p>
        <a href="https://github.com/avias8/malaria-inference-frontend/tree/Source">View on GitHub</a>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
};

export default Projects;