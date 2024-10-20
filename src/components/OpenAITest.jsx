import React, { useState } from 'react';

const OpenAITest = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleGenerateText = async () => {
        try {
            const result = await fetch('http://localhost:9001/generate-text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }), // Sending the user's prompt to the backend
            });
            const data = await result.json();
            setResponse(data.generatedText); // Setting the response from OpenAI
        } catch (error) {
            console.error('Error generating text:', error);
            setResponse('Error generating text');
        }
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