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
            logo: ubcLogo,
            alt: 'UBC Logo',
            institution: 'University of British Columbia',
            details: 'B.A.Sc. in Mechanical Engineering, Minor in Computer Science',
            duration: 'Graduated: June 2022',
            courses: [
                'Multiple Linkage System Design',
                'Material Selection and Synthesis',
                'Kinematics and Dynamics',
                'Mechanics of Materials',
                'Control Systems',
                'Heat Transfer Analysis and Simulation',
                'Computational Methods in Engineering (MATLAB, FEM)',
                'Embedded System Design using VHDL and Verilog',
                'Parallel Processing with CUDA and OpenMP',
                'Software Design and Data Structures'
            ],
            projects: [
                {
                    name: 'Autonomous Grow Chamber Capstone Project',
                    description: 'Designed and developed a controlled microclimate chamber for Limitless Potential Technologies Inc. This project involved custom PCB design with power regulation, LED arrays for optimized growth, real-time monitoring using microcontroller programming (C/C++), and integration of solenoids and sensors to regulate environmental conditions. Implemented PID control loops for optimal environmental parameters.',
                    skills: ['PCB Design', 'Microcontroller Programming', 'Control Systems', 'Sensors Integration', 'PID Control']
                },
                {
                    name: 'Material Synthesis Project',
                    description: 'Assisted in developing a new form of concrete with enhanced durability. Conducted experiments on composite materials to evaluate tensile strength, compressive strength, and fatigue resistance, ensuring the new composite materials met desired mechanical properties.',
                    skills: ['Material Synthesis', 'Mechanical Testing', 'Composite Materials', 'Experimental Analysis']
                },
                {
                    name: 'Agricultural Robotics Club Founder - FarmBot Project',
                    description: 'Led the implementation of FarmBot, an open-source CNC farming system. Coordinated assembly and configuration of hardware and software components, automating agricultural tasks like seed planting and watering. Conducted workshops to promote sustainable agricultural technologies.',
                    skills: ['Automation', 'Mechanical Design', 'Sustainable Agriculture', 'Team Leadership', 'CNC Systems']
                }
                // Add more projects as needed...
            ],
            notableAchievements: [
                'President & Founder of the Agricultural Robotics Club (ARC)',
                'Led workshops on sustainable agriculture technologies and CNC-based farming',
                'Graduated with a specialization in simulation, mechanical system design, and computational methods'
            ]
        },
        {
            logo: utLogo,
            alt: 'University of Toronto Logo',
            institution: 'University of Toronto',
            details: 'XR/VR Software Development with Unity',
            duration: 'Completed: October 2023',
            courses: [
                'Introduction to XR Development',
                'Unity Fundamentals for AR/VR',
                'C# Scripting for Interactive Experiences',
                'Spatial Mapping and Gesture Recognition',
                'Advanced XR Interaction with Unity',
                'ARKit and ARCore for Augmented Reality Development'
            ],
            projects: [
                {
                    name: 'AR Application Development with ARKit',
                    description: 'Developed an AR application using Unity and ARKit, allowing users to visualize 3D objects in real-world environments. Focused on accurate tracking, object placement, and realistic scaling for an immersive augmented experience.',
                    skills: ['AR Development', 'Unity', 'ARKit', '3D Modeling']
                },
                {
                    name: 'Interactive VR Experience for Learning',
                    description: 'Built an interactive VR learning environment using Unity XR Toolkit, designed to teach users about basic physics concepts in an engaging way. Implemented user interactions with hand tracking and gaze-based selection.',
                    skills: ['VR Development', 'Unity XR Toolkit', 'Physics Simulations', 'Interaction Design']
                },
                {
                    name: 'Spatial Mapping with Meta XR SDK',
                    description: 'Explored spatial mapping capabilities in VR by creating virtual worlds that respond to real-world surroundings. Used Unity and Meta XR SDKs to develop adaptive environments that adjust to physical obstacles and features in the room.',
                    skills: ['Spatial Mapping', 'Unity', 'Meta XR SDK', 'Environmental Interaction']
                },
                {
                    name: 'Gesture-Based Control in Virtual Reality',
                    description: 'Implemented gesture recognition using Unity\'s XR Interaction Toolkit to create an intuitive interface for controlling objects in a virtual space. Designed and programmed multiple gestures to interact with objects, enhancing user engagement.',
                    skills: ['Gesture Recognition', 'XR Interaction Toolkit', 'User Interface Design', 'C# Scripting']
                }
            ],
            notableAchievements: [
                'Completed advanced coursework on XR and AR development with a focus on real-world application scenarios.',
                'Successfully implemented XR features using Unity\'s XR Interaction Toolkit, ARKit, and Meta XR SDK.',
                'Developed projects involving augmented and virtual reality, with particular emphasis on interaction design and spatial awareness.'
            ]
        },
        {
            logo: mitLogo,
            alt: 'MIT Logo',
            institution: 'MIT Professional Education',
            details: 'Applied Data Science and Machine Learning',
            duration: 'Completed: July 2024',
            courses: [
                'Introduction to Data Science and AI',
                'Data Analysis and Visualization',
                'Machine Learning and Deep Learning Fundamentals',
                'Generative AI and Recommendation Systems',
                'ChatGPT and Generative AI',
                'TensorFlow and Keras for Deep Learning',
                'Advanced Data Science Capstone Project'
            ],
            projects: [
                {
                    name: 'Malaria Detection Using Convolutional Neural Networks (CNN)',
                    description: 'Developed a deep learning model using TensorFlow and Keras to accurately detect malaria-infected red blood cells from images. Achieved an accuracy of 99% through model optimization, data augmentation, and hyperparameter tuning. Emphasized in the capstone project as a practical solution for healthcare.',
                    skills: ['TensorFlow', 'Keras', 'CNN', 'Deep Learning', 'Data Preprocessing', 'Model Optimization']
                },
                {
                    name: 'SVHN Digit Recognition Enhancement',
                    description: 'Enhanced digit recognition accuracy using the Street View House Numbers (SVHN) dataset. Utilized CNN architectures in TensorFlow and Keras, applying data augmentation techniques to improve model performance. Implemented k-fold cross-validation to validate the model effectively.',
                    skills: ['TensorFlow', 'Keras', 'Image Processing', 'CNN', 'Model Validation']
                },
                {
                    name: 'Recommendation System for E-Commerce',
                    description: 'Built a recommendation engine using collaborative filtering and deep learning to predict product preferences. Employed Python libraries such as scikit-learn and TensorFlow to train and evaluate the model, optimizing for accuracy and user satisfaction.',
                    skills: ['Recommendation System', 'Collaborative Filtering', 'Deep Learning', 'scikit-learn', 'Python']
                },
                {
                    name: 'ChatGPT Integration for AI-Based Customer Service',
                    description: 'Integrated an AI-based customer service chatbot using OpenAI\'s GPT-3 to assist in real-time customer interactions. Focused on natural language understanding and response generation to provide quick, automated support for common customer inquiries.',
                    skills: ['OpenAI API', 'Natural Language Processing', 'ChatGPT', 'API Integration', 'Python']
                }
            ],
            notableAchievements: [
                'Completed hands-on projects involving TensorFlow and Keras for medical image classification and recommendation systems.',
                'Developed a deep learning model that achieved 99% accuracy for malaria detection, contributing to healthcare solutions.',
                'Applied machine learning techniques to real-world datasets, creating a highly accurate SVHN digit recognition model.'
            ],
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
                            <p>Projects: {edu.projects.slice(0, 2).map(project => typeof project === 'object' ? project.name : project).join(', ')}</p>
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
                                {selectedEducation.link && (
                                    <p>
                                        <a href={selectedEducation.link} target="_blank" rel="noopener noreferrer" className="school-link">
                                            Visit School Website
                                        </a>
                                    </p>
                                )}

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
                            {selectedEducation.projects.map((project, idx) => {
                                if (typeof project === 'object') {
                                    return (
                                        <li key={idx}>
                                            <strong>{project.name}:</strong> {project.description}
                                            <br />
                                            <span><strong>Skills:</strong> {project.skills.join(', ')}</span>
                                        </li>
                                    );
                                } else {
                                    return <li key={idx}>{project}</li>;
                                }
                            })}
                        </ul>
                        <button className="close-modal-bottom" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Education;