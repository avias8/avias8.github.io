import React from 'react';
import { FaCode, FaCogs, FaRobot, FaVrCardboard, FaDatabase, FaCloud, FaProjectDiagram, FaMicrochip } from 'react-icons/fa'; // Import icons
import './Skills.css';


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-container">
        {/* Programming Languages */}
        <div className="skill-category">
          <div className="skill-icon"><FaCode /></div>
          <h3>Programming Languages</h3>
          <ul>
            <li>C#, C++, Python, PowerShell, Java, MATLAB, SQL, JavaScript</li>
          </ul>
        </div>

        {/* Frameworks & Technologies */}
        <div className="skill-category">
          <div className="skill-icon"><FaCogs /></div>
          <h3>Frameworks & Technologies</h3>
          <ul>
            <li>.NET, ASP.NET MVC, Django, Flask, Unity, CUDA, OpenMP, VHDL, RESTful APIs</li>
          </ul>
        </div>

        {/* Machine Learning & Data Science */}
        <div className="skill-category">
          <div className="skill-icon"><FaRobot /></div>
          <h3>Machine Learning & Data Science</h3>
          <ul>
            <li>TensorFlow, Keras, PyTorch, scikit-learn, NumPy, Pandas, Data Analysis</li>
          </ul>
        </div>

        {/* VR/AR Development */}
        <div className="skill-category">
          <div className="skill-icon"><FaVrCardboard /></div>
          <h3>VR/AR Development</h3>
          <ul>
            <li>Unity, Unity XR Toolkit, Photon Engine, Meta XR SDKs, Gaussian Splatting</li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="skill-category">
          <div className="skill-icon"><FaCode /></div>
          <h3>Web Development</h3>
          <ul>
            <li>ASP.NET MVC, Django, Flask, RESTful APIs, JavaScript, HTML, CSS</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="skill-category">
          <div className="skill-icon"><FaDatabase /></div>
          <h3>Databases</h3>
          <ul>
            <li>SQL Server, PostgreSQL, MySQL</li>
          </ul>
        </div>

        {/* 3D Modeling & Mechanical Engineering */}
        <div className="skill-category">
          <div className="skill-icon"><FaCogs /></div>
          <h3>3D Modeling & Mechanical Engineering</h3>
          <ul>
            <li>SolidWorks, Blender, Abaqus, Kinematics, Dynamics, Material Selection, FEA</li>
          </ul>
        </div>

        {/* Cloud Technologies & DevOps */}
        <div className="skill-category">
          <div className="skill-icon"><FaCloud /></div>
          <h3>Cloud Technologies & DevOps</h3>
          <ul>
            <li>Azure, Docker, Kubernetes, Ansible Tower, GitLab CI/CD, Jenkins</li>
          </ul>
        </div>

        {/* Collaboration & Project Management Tools */}
        <div className="skill-category">
          <div className="skill-icon"><FaProjectDiagram /></div>
          <h3>Collaboration & Project Management Tools</h3>
          <ul>
            <li>Bitbucket, JIRA, Confluence, ConnectWise, Git, GitFlow</li>
          </ul>
        </div>

        {/* Hardware Design & Embedded Systems */}
        <div className="skill-category">
          <div className="skill-icon"><FaMicrochip /></div>
          <h3>Hardware Design & Embedded Systems</h3>
          <ul>
            <li>PCB Design (Altium Designer), Microcontroller Programming (Arduino, Raspberry Pi, Quartus), VHDL, Verilog</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
