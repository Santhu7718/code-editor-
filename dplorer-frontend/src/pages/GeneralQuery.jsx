import { useState } from 'react';

export default function GeneralQuery() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    // API call would go here
    setResponse(`Response to: "${query}"`);
  };

  return (
    <div className="general-query">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask anything..."
      />
      
      <button onClick={handleSubmit}>Ask</button>
      
      {response && (
        <div className="response">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}