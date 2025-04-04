export default function CodeAnalysisModes({ activeMode, setMode }) {
    const modes = ['EXPLAIN', 'COMMENT', 'DEBUG', 'IMPROVE'];
    
    return (
      <div className="code-modes">
        {modes.map(mode => (
          <button
            key={mode}
            className={activeMode === mode ? 'active' : ''}
            onClick={() => setMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>
    );
  }