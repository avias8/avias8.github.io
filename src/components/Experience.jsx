import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Professional Experience</h2>
      <div className="experience-container">

        {/* CN Rail Experience */}
        <div className="experience-card">
          <h3>Software Engineer | Canadian National Railway (CN Rail)</h3>
          <p className="experience-duration">April 2022 - Present</p>
          <p className="experience-description">
            As a Software Engineer at CN Rail, I contribute to building scalable applications and automation solutions for enterprise needs. Key responsibilities include:
          </p>
          <ul className="experience-responsibilities">
            <li>Developed modules in C# and ASP.NET MVC for automating business workflows and integrating legacy systems.</li>
            <li>Worked on <strong>SSIS (SQL Server Integration Services)</strong> to streamline data processing and migration tasks, resulting in a 30% improvement in efficiency.</li>
            <li>Built <strong>OAuth 2.0</strong> integrations for secure system interoperability, utilizing Microsoft Graph API.</li>
            <li>Implemented and maintained <strong>TFS pipelines</strong> for CI/CD deployments, enhancing software delivery timelines.</li>
          </ul>
          <p className="technologies"><strong>Technologies:</strong> C#, ASP.NET MVC, SSIS, TFS, OAuth 2.0, SQL Server</p>
        </div>

        {/* Corporate Networks Experience */}
        <div className="experience-card">
          <h3>IT Admin/Systems Engineer | Corporate Networks</h3>
          <p className="experience-duration">June 2020 - June 2021</p>
          <p className="experience-description">
            Managed IT infrastructure and provided client support across various industries. Key achievements include:
          </p>
          <ul className="experience-responsibilities">
            <li>Designed and developed an <strong>Inventory Management System</strong> using SQL Server and Microsoft PowerApps, leading to improved asset tracking efficiency.</li>
            <li>Engineered automated software deployment scripts using <strong>PowerShell</strong>, reducing deployment times by 50%.</li>
            <li>Provided technical support and managed service requests using <strong>ConnectWise</strong> and other client management tools.</li>
          </ul>
          <p className="technologies"><strong>Technologies:</strong> SQL Server, PowerShell, Microsoft PowerApps, ConnectWise</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
