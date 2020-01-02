import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('just renderre from useEFFECT');
    }, [count]);

    console.log('just rendered');

    const alertCount = () => {
        setTimeout(() => {
            alert(count);
        }, 3000);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Ad count</button>
            <button onClick={alertCount}>Alert</button>
        </div>
    );
};

export default Counter;
