// src/CodeSnippet.js
import React from 'react';
import './CodeSnippet.css'; // Create a separate CSS file for CodeSnippet styles

function CodeSnippet() {
  return (
    <div className="code-snippet">
      <h2>Code Snippet</h2>
      <pre>
        <code>
          {`function greet(name) {
  return \`Hello, \${name}!\`;
}`}
        </code>
      </pre>
    </div>
  );
}

export default CodeSnippet;