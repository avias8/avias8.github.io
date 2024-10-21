// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, I couldn't find the page you're looking for.</p>
      <img src="https://media.giphy.com/media/3o7TKUM3IgJBX2as9O/giphy.gif" alt="Page Not Found" />
      <br />
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
