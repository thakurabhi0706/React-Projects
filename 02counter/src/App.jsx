import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Counter App</h1>
        <p className="subtitle">Modern UI with Vite + React</p>

        <div className="counterBox">
          {counter}
        </div>

        <div className="buttons">
          <button className="btn primary" onClick={addValue}>
            + Add
          </button>

          <button className="btn danger" onClick={removeValue}>
            − Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
