import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'meow-one'},
        {message: 'meow-two'},
    ])

    let[title, setTitle] = useState('')
    console.log(title)
    const addMessage = (title: string)=>{
        let newMessage = {message: title}
        setMessage([newMessage, ...message, ])
    }

    const callBackButtonHandler = ()=> {
        addMessage(title)
        setTitle('')
    }

  return (
    <div className="App">
     <Input setTitle={setTitle} title={title}/>
        <Button name={'fox'} callBack={callBackButtonHandler}/>
        {message.map((el, index)=>{
            return <div key={index}>{el.message}</div>
        })}
    </div>
  );
}

export default App;
