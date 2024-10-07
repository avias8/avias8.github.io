import React from 'react';
import logo from './logo.svg'; // Import the React logo
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import CodeSnippet from './CodeSnippet'; // Import CodeSnippet
import TechStack from './TechStack'; // Import TechStack
import Clock from './Clock'; // Import the new Clock component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Add the logo here */}
        <Clock /> {/* Add the Clock component here */}
        <h1>Welcome to My Beautiful React Page!</h1>
        <p>Your one-stop destination for amazing content.</p>
        
        <a
          className="App-link"
          href="https://avias8.github.io/avivarma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My Other Project
        </a>
      </header>

      <Navbar />
      <Banner />
      <main className="App-main">
        <section id="about" className="App-section">
          <h2>About Me</h2>
          <p>
            Software Engineer, Artist, and a lifelong learner!
          </p>
        </section>


        <section id="tech-stack" className="App-section">
          <TechStack /> {/* Add TechStack component */}
        </section>

        <section id="code-snippet" className="App-section">
          <CodeSnippet /> {/* Add CodeSnippet component */}
        </section>

        

        <section id="contact" className="App-section">
          <h2>Contact Us</h2>
          <p>Feel free to reach out for any inquiries!</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 My Beautiful React Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
