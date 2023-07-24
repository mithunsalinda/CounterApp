import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Count can't be more than 10");
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count can't be less than 0");
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div>
        <p>Count: {count}</p>
        <button onClick={increase} data-testid="increase">
          Increase
        </button>
        <button onClick={decrease} data-testid="decrease">
          Decrease
        </button>
        <button onClick={reset} data-testid="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
