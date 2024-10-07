// src/Clock.js
import React, { useState, useEffect } from 'react';
import './Clock.css'; // Optionally, add some styling

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="clock-container">
      <h2>Current Time</h2>
      <p className="clock-time">{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
