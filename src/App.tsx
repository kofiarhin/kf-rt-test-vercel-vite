import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="app-overlay">
        <h1 className="app-title">Cut the Noise. Get the Signal.</h1>
        <p className="app-subtitle">
          This isn't just another site. It's your launchpad to clarity, power, and purpose.
        </p>
        <a href="/reader" className="app-button">Enter Reader Mode</a>
      </div>
    </div>
  );
};

export default App;
