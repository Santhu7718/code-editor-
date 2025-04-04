import { useState } from 'react';
import './App.css';

function App() {
  const [activeMode, setActiveMode] = useState('general');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('Output will appear here...');
  const [darkMode, setDarkMode] = useState(false);
  const [panelLayout, setPanelLayout] = useState('editor-bottom');

  const handleSubmit = () => {
    const responses = {
      general: `AI Response:\nYou asked about "${input}"\n\nSpaceX, or Space Exploration Technologies Corp., is an American aerospace manufacturer and space transportation company founded in 2003 by Elon Musk.`,
      explain: "EXPLANATION:\nThis code is a basic implementation that demonstrates fundamental programming concepts.",
      comment: "COMMENTED VERSION:\n// This function performs the main calculation\n// Input: x - the base value\n// Returns: squared value plus offset",
      debug: "DEBUG REPORT:\nNo critical errors found. Suggestions:\n1. Add input validation\n2. Handle edge cases",
      improve: "IMPROVED VERSION:\nconst optimizedFunction = (x) => {\n  // Added validation\n  if (typeof x !== 'number') throw new Error('Invalid input');\n  \n  // Better algorithm\n  return Math.pow(x, 2) + 10;\n}",
      playground: "EXECUTION RESULT:\n> Input processed successfully\n> Output: 42\n> Memory usage: 2.4MB\n> Runtime: 0.002s"
    };
    setOutput(responses[activeMode === 'playground' ? 'playground' : activeMode]);
  };

  const handleClear = () => {
    setInput('');
    setOutput('Output cleared');
  };

  const togglePanelLayout = () => {
    setPanelLayout(prev => prev === 'editor-bottom' ? 'editor-right' : 'editor-bottom');
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'} ${panelLayout}`}>
      <div className="header">
        <div className="header-left">
          <h1>ℂ𝕠𝕕𝕖 𝕋𝕦𝕥𝕠𝕣</h1>
          <div className="prompt-text">
            Ask anything , Learn and Code
          </div>
        </div>
        <div className="header-right">
          <button className="header-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button className="header-btn">🔗</button>
        </div>
      </div>

      <div className="main-container">
        <div className="sidebar">
          <button
            className={`mode-btn ${activeMode === 'general' ? 'active' : ''}`}
            onClick={() => setActiveMode('general')}
            title="General Query"
          >
            <span className="mode-icon">💬</span>
          </button>
          
          <button
            className={`mode-btn ${activeMode === 'playground' ? 'active' : ''}`}
            onClick={() => setActiveMode('playground')}
            title="Code Playground"
          >
            <span className="mode-icon">🛝</span>
          </button>

          <div className="code-analysis-group">
            <button
              className={`mode-btn ${['explain','comment','debug','improve'].includes(activeMode) ? 'active' : ''}`}
              onClick={() => setActiveMode('explain')}
              title="Code Analysis"
            >
              <span className="mode-icon">🔍</span>
            </button>
            
            {['explain','comment','debug','improve'].includes(activeMode) && (
              <div className="sub-modes">
                <button
                  className={`sub-mode-btn ${activeMode === 'explain' ? 'active' : ''}`}
                  onClick={() => setActiveMode('explain')}
                  title="Explain"
                >
                  <span className="mode-icon">📖</span>
                </button>
                <button
                  className={`sub-mode-btn ${activeMode === 'comment' ? 'active' : ''}`}
                  onClick={() => setActiveMode('comment')}
                  title="Comment"
                >
                  <span className="mode-icon">✏️</span>
                </button>
                <button
                  className={`sub-mode-btn ${activeMode === 'debug' ? 'active' : ''}`}
                  onClick={() => setActiveMode('debug')}
                  title="Debug"
                >
                  <span className="mode-icon">🐞</span>
                </button>
                <button
                  className={`sub-mode-btn ${activeMode === 'improve' ? 'active' : ''}`}
                  onClick={() => setActiveMode('improve')}
                  title="Improve"
                >
                  <span className="mode-icon">⚡</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="editor-panel">
          <div className="editor-header">
            <span>{activeMode === 'general' ? 'Query Input' : 'Code Editor'}</span>
            <div className="editor-actions">
              <button className="run-btn" onClick={handleSubmit}>
                {activeMode === 'general' ? 'Ask AI' : 
                 activeMode === 'playground' ? 'Run Code' : 'Analyze'}
              </button>
              <button className="clear-btn" onClick={handleClear}>
                Clear
              </button>
              <button className="panel-swap-btn" onClick={togglePanelLayout}>
                ⇄ 
              </button>
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input-area"
            placeholder={
              activeMode === 'general' 
                ? "Tell me about python functions" 
                : activeMode === 'playground'
                ? "Enter your code here..."
                : "Paste code to analyze..."
            }
          />
        </div>

        <div className="output-panel">
          <div className="output-header">
            {activeMode === 'general' ? 'AI Response:' : 
             activeMode === 'playground' ? 'Execution Result:' : 'Analysis Result:'}
          </div>
          <pre className="output-content">{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;