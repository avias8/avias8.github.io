import React, { useState } from 'react';

const OpenAITest = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleGenerateText = async () => {
    if (!prompt) {
      alert('Please enter a prompt');
      return;
    }

    const eventSource = new EventSource('http://localhost:9001/generate-text');

    eventSource.onopen = () => {
      console.log('Connection to server opened.');
    };

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setResponse((prevResponse) => prevResponse + data.content); // Append new content to the response
    };

    eventSource.onerror = (error) => {
      console.error('Error:', error);
      eventSource.close();
    };

    eventSource.addEventListener('complete', () => {
      console.log('Stream complete');
      eventSource.close();
    });
  };

  return (
    <div>
      <h2>Test OpenAI Request</h2>
      <textarea
        placeholder="Enter a prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleGenerateText}>Generate Text</button>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default OpenAITest;