import React from 'react';
import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <h1>Mira Counter</h1>
      <Counter number={0} />
    </div>
  );
}

export default App;
