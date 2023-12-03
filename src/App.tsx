import React from 'react';
import {Counter} from "./Counter";
import s from "./App.module.css";


function App() {
    return (
        <div className={s.app}>
            <div className={s.counter}>
                <h3> Mira Counter</h3>
                <Counter number={0}/>
            </div>
        </div>
    );
}

export default App;
