import { useState } from 'react';
import CodeAnalysisModes from '../components/CodeAnalysisModes';

export default function CodeAnalysis() {
  const [activeMode, setMode] = useState('EXPLAIN');
  const [code, setCode] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    // API call would go here
    setResponse(`[${activeMode} mode analysis]\n${code}`);
  };

  return (
    <div className="code-analysis">
      <CodeAnalysisModes activeMode={activeMode} setMode={setMode} />
      
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
      />
      
      <button onClick={handleSubmit}>Analyze</button>
      
      {response && (
        <div className="response">
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
}