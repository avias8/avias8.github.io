import React from 'react';
import Slider from 'react-slick';
import './Projects.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        }
      }
    ]
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Highlighted Projects</h2>
      <div className="projects-slider-container">
        <Slider {...settings} className="projects-slider">
          
          {/* Crazy Golf VR Project */}
          <div className="project-card">
            <h3>Crazy Golf VR</h3>
            <img src="images/crazy-golf-vr-image.jpg" alt="Crazy Golf VR" className="project-image" />
            <p>A fun and immersive VR mini-golf game available on Meta’s App Lab. Players can explore challenging levels in a realistic and visually stunning environment, complete with physics-based mechanics for a lifelike golf experience.</p>
            <p className="project-details">
              <strong>Challenges:</strong> Designing realistic ball physics and integrating Oculus controls.<br />
              <strong>Outcome:</strong> Over 18,000 installs with a 4.5-star rating.<br />
              <strong>Role:</strong> Lead Developer, responsible for game mechanics, UI, and overall experience design.
            </p>
            <p className="technologies"><strong>Technologies:</strong> Unity, C#, Oculus Integration, XR Interaction Toolkit</p>
            <a href="https://www.meta.com/experiences/7242557155836637/" target="_blank" rel="noopener noreferrer" className="project-link">View on App Lab</a>
          </div>

          {/* Malaria Detection Capstone Project */}
          <div className="project-card">
            <h3>Malaria Detection Capstone</h3>
            <img src="images/malaria-detection-image.png" alt="Malaria Detection Capstone" className="project-image" />
            <p>Developed a machine learning model capable of detecting malaria from red blood cell images with 99% accuracy. The model was integrated with a web-based interface for users to interactively classify cell images.</p>
            <p className="project-details">
              <strong>Challenges:</strong> Achieving high accuracy with limited labeled data.<br />
              <strong>Outcome:</strong> Delivered a web-based tool used by students and researchers for educational purposes.<br />
              <strong>Role:</strong> Full-Stack Developer, focusing on model training, frontend integration, and deployment.
            </p>
            <p className="technologies"><strong>Technologies:</strong> TensorFlow, Keras, React, Flask, Docker</p>
            <a href="https://github.com/avias8/malaria-inference-frontend/tree/Source" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>

          {/* TheraConnect Project */}
          <div className="project-card">
            <h3>TheraConnect</h3>
            <img src="images/theraconnect-image.webp" alt="TheraConnect Project" className="project-image" />
            <p>A virtual therapy platform designed to provide immersive therapeutic services. Users, especially those undergoing exposure therapy, can connect with therapists in a calming virtual space for guided sessions.</p>
            <p className="project-details">
              <strong>Challenges:</strong> Ensuring reliable real-time interactions between therapists and patients in VR.<br />
              <strong>Outcome:</strong> Successfully completed trials with positive feedback from mental health professionals.<br />
              <strong>Role:</strong> Lead Developer, responsible for VR implementation and real-time communication features.
            </p>
            <p className="technologies"><strong>Technologies:</strong> Unity, C#, Photon Engine, Azure Cognitive Services</p>
            <a href="https://theraconnect.ca" target="_blank" rel="noopener noreferrer" className="project-link">Learn More</a>
          </div>

          {/* Virtual Realty 360 Project */}
          <div className="project-card">
            <h3>Virtual Realty 360</h3>
            <img src="images/virtual-realty-360-image.jpg" alt="Virtual Realty 360" className="project-image" />
            <p>A VR platform that revolutionizes the real estate experience by providing users with immersive 360-degree virtual tours of properties. It enhances user engagement and reduces the need for in-person visits.</p>
            <p className="project-details">
              <strong>Challenges:</strong> Implementing 360-degree views and ensuring smooth transitions between rooms.<br />
              <strong>Outcome:</strong> Increased engagement rates for real estate listings by 30% on partner websites.<br />
              <strong>Role:</strong> Lead Developer, focusing on 360-degree view implementation and user interaction.
            </p>
            <p className="technologies"><strong>Technologies:</strong> Unity, Photon Engine, Meta XR SDKs</p>
            <a href="https://virtualrealty360.com" target="_blank" rel="noopener noreferrer" className="project-link">Learn More</a>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
