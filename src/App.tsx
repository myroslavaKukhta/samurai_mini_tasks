import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Box} from "./components/Box";
import {Footer} from "./components/Footer";
import {Body} from "./components/Body";
import {ButtonNew} from "./components/ButtonNew";


const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
];

function App() {
    const ButtonFoo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }

    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a);
    }

    const onClickHandler2 = () => {
        setA(0);
    }

    type objMoneyArr = {
        money: {
            banknots: string;
            value: number;
            number: string;
        };
    };

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'euro', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'euro', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'euro', value: 50, number: ' v1234567890'},
    ]);
    let currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots==='euro');

    return (
        <div className="App">
            <Header title={'good'}/>
            <button onClick={onClickHandler}>{a}</button>
            <button onClick={onClickHandler2}>reset</button>
            <Body topCars={topCars}/>
            <ButtonNew name={"fox"}
                       callBack={() =>
                           ButtonFoo("Fox",
                               28,
                               'Kyiv')}>
                g
            </ButtonNew>
            <Box>

<ul>
    {currentMoney.map((mon, index)=> {
        return(
            <li key={index}>
                <span>{mon.banknots}</span>
                <span>{mon.value}</span>
                <span>{mon.number}</span>
            </li>
        )
    })}
</ul>
          <div>
              <button>all</button>
              <button>dollars</button>
              <button>euros</button>
          </div>

                </Box>
            <Footer/>
        </div>
    );
}

export default App;


