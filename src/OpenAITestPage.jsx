import React from 'react';
import OpenAITest from './components/OpenAITest'; // Ensure correct path

const OpenAITestPage = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>OpenAI Test Page</h1>
            <OpenAITest />
        </div>
    );
};

export default OpenAITestPage;