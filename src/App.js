import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCount(count + 1)}>Add</button>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
