import React, { useState } from 'react';
import './Education.css';
import ubcLogo from '../logos/ubc-logo.png';
import mitLogo from '../logos/mit-logo.svg';
import utLogo from '../logos/uoft-logo.svg';
import westwoodLogo from '../logos/westwood-logo.webp';

const Education = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState(null);

    const educationData = [
        {
            logo: westwoodLogo,
            alt: 'Westwood High School Logo',
            institution: 'Westwood Community High School',
            details: 'High School Diploma | 2013 - 2016',
            courses: ['Model UN', 'Project Kenya', 'Student Council', 'Junior Achievement (JA)'],
            projects: [
                'Model UN: Participated in national assemblies, promoted globally focused discussions within the school.',
                'Project Kenya: Worked on raising funds to build schools in Kenya.',
                'Student Council: Actively involved in leadership roles to represent student voices.',
                'Junior Achievement (JA): Co-founded "Clarity," a company that developed and sold a screen cleaning solution.'
            ],
            link: 'https://westwood.fmpsdschools.ca/',
        },
        {
            logo: utLogo,
            alt: 'University of Toronto Logo',
            institution: 'University of Toronto',
            details: 'XR/VR Software Development with Unity',
            courses: ['Course 5', 'Course 6'],
            projects: ['Project E', 'Project F'],
        },
        {
            logo: ubcLogo,
            alt: 'UBC Logo',
            institution: 'University of British Columbia',
            details: 'Mechanical Engineering Major | Computer Science Minor',
            courses: ['Course 1', 'Course 2'],
            projects: ['Project A', 'Project B'],
        },
        {
            logo: mitLogo,
            alt: 'MIT Logo',
            institution: 'MIT Professional Education',
            details: 'Applied Data Science and Machine Learning',
            courses: ['Course 3', 'Course 4'],
            projects: ['Project C', 'Project D'],
            apiLink: 'https://beta.openai.com/docs/', // Adding the OpenAI API link here
        },
    ];

    const openModal = (education) => {
        setSelectedEducation(education);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedEducation(null);
    };

    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education-container">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-card" onClick={() => openModal(edu)}>
                        <div className="education-logo-container">
                            <img src={edu.logo} alt={edu.alt} className="education-logo" />
                        </div>
                        <div className="education-content">
                            <h3>{edu.institution}</h3>
                            <p>{edu.details}</p>
                        </div>
                        <div className="education-preview">
                            <h4>Preview:</h4>
                            <p>Courses: {edu.courses.slice(0, 2).join(', ')}</p>
                            <p>Projects: {edu.projects.slice(0, 2).join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h3>{selectedEducation.institution}</h3>
                        <p>{selectedEducation.details}</p>
                        {selectedEducation.link && (
                            <p>
                                <a href={selectedEducation.link} target="_blank" rel="noopener noreferrer">
                                    Visit School Website
                                </a>
                            </p>
                        )}
                        <h4>Courses/Activities:</h4>
                        <ul>
                            {selectedEducation.courses.map((course, idx) => (
                                <li key={idx}>{course}</li>
                            ))}
                        </ul>
                        <h4>Projects/Involvements:</h4>
                        <ul>
                            {selectedEducation.projects.map((project, idx) => (
                                <li key={idx}>{project}</li>
                            ))}
                        </ul>
                        {selectedEducation.apiLink && (
                            <p>
                                <a href={selectedEducation.apiLink} target="_blank" rel="noopener noreferrer">
                                    Explore OpenAI API Documentation
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Education;