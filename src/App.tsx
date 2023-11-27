import React from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";

function App() {
    const addMessage = (title: string)=>{
        alert (title);
    }
  return (
    <div className="App">
     <FullInput addMessage={addMessage}/>
    </div>
  );
}

export default App;
