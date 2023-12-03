import React, {useState} from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    number: number
}

export const Counter: React.FC<CounterPropsType> = ({number}) => {
    let [count, setCount] = useState<number>(number)
    let [error, setError] = useState<number | null>(null);
    const maxValue = 5;
    const startValue = 0;

    const onPlusHandler = () => {
        if (count < maxValue) {
            setCount(count + 1)
        } else {
            setError(null)
        }
    }

    const onResetHandler = () => {
        setCount(startValue);
    }

    return (
        <div className={s.container}>
            <div className={s.count}>
            <p>Count:</p>
            <p className={count < maxValue ? s.normal : s.max}> {count}</p>
            </div>
            <div className={s.buttons}>
                <button onClick={onPlusHandler} className={count < maxValue ? s.normal : s.max}
                        disabled={count === maxValue}>
                    increment
                </button>

                <button onClick={onResetHandler} className={count > startValue ? s.normal : s.max}
                        disabled={count === startValue}>
                    reset
                </button>
            </div>
        </div>
    );
};