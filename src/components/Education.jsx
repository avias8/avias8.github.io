import React from 'react';
import './Education.css';
import ubcLogo from '../logos/ubc-logo.png';
import mitLogo from '../logos/mit-logo.svg';
import utLogo from '../logos/uoft-logo.webp';
import westwoodLogo from '../logos/westwood-logo.webp';

const Education = () => {
  const educationData = [
    {
      logo: ubcLogo,
      alt: 'UBC Logo',
      institution: 'University of British Columbia',
      details: 'Mechanical Engineering Major | Computer Science Minor',
    },
    {
      logo: mitLogo,
      alt: 'MIT Logo',
      institution: 'MIT Professional Education',
      details: 'Applied Data Science and Machine Learning',
    },
    {
      logo: utLogo,
      alt: 'University of Toronto Logo',
      institution: 'University of Toronto',
      details: 'XR/VR Software Development with Unity',
    },
    {
      logo: westwoodLogo,
      alt: 'Westwood High School Logo',
      institution: 'Westwood Community High School',
      details: 'High School Diploma',
    },
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <img src={edu.logo} alt={edu.alt} className="education-logo" />
            <div className="education-content">
              <h3>{edu.institution}</h3>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;