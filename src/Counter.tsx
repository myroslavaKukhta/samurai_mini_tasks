import React, { useState } from 'react';

type CounterProps = {
    number: number;
};

const Counter: React.FC<CounterProps> = ({ number }) => {
    const [count, setCount] = useState<number>(number);

    const onPlusHandler = () => {
        setCount(count + 1);
    };

    const onMinusHandler = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onPlusHandler}>+</button>
            <button onClick={onMinusHandler}>-</button>
        </div>
    );
};

export default Counter;