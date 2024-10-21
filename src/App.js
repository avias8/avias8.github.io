import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import OpenAITestPage from './OpenAITestPage.jsx';
import NotFound from './components/NotFound.jsx'; // Import NotFound component

const ResumePage = () => (
  <div className="resume-page-container">
    <div className="resume-iframe-wrapper">
      <iframe 
        src="/resume/index.html" 
        title="Avi Varma Resume" 
        className="resume-iframe"
      />
    </div>
  </div>
);

const MalariaInferencePage = () => (
  <div className="malaria-inference-page-container">
    <div className="malaria-iframe-wrapper">
      <iframe 
        src="/malaria-inference-frontend/index.html" 
        title="Malaria Inference" 
        className="malaria-iframe"
      />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content"> {/* Flexbox container for content */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/openai-test" element={<OpenAITestPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/malaria-inference" element={<MalariaInferencePage />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Split HomePage for easier management
const HomePage = () => (
  <>
    <About id="about-section" />
    <Skills id="skills-section" />
    <Projects id="projects-section" />
    <Experience id="experience-section" />
    <Education id="education-section" />
    <Contact id="contact-section" />
  </>
);

export default App;