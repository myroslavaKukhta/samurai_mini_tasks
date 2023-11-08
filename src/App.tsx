import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Box} from "./components/Box";
import {Footer} from "./components/Footer";
import {Body} from "./components/Body";


const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
];

function App() {
    return (
        <div className="App">
            <Header title={'good'}/>
            <Box>
                <Body topCars={topCars}/>
            </Box>
            <Footer/>
        </div>
    );
}

export default App;


