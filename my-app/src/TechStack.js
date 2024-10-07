// src/TechStack.js
import React from 'react';
import './TechStack.css';

const techStack = [
  { name: 'JavaScript', icon: '🟡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '📦' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '🐙' },
  { name: 'CSS', icon: '🎨' },
  { name: 'HTML', icon: '📄' },
];

function TechStack() {
  return (
    <div className="tech-stack">
      <h2>My Tech Stack</h2>
      <ul className="tech-list">
        {techStack.map((tech, index) => (
          <li key={index} className="tech-item">
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechStack;