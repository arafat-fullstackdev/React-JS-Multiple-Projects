import React, { useState } from 'react';

const Counter = () => {
    //Initial the counter value
    const [counter, setCounter] = useState(0);
    //? Increment Counter logic
    const incrementCounter = () => {
        setCounter(counter +2);
    }
    //? Decrement Counter logic
    const decrementCounter = () => {
        setCounter(counter -1);

    }
    //? Reset Counter logic
    const resetCounter = () => {
        setCounter(0);
    }

    return (
        <div style={{ textAlign: "center", marginTop: '20px' }}>
           <h1>Counter:{counter}</h1>
           <button onClick={incrementCounter}
           style={{margin: "0 5px"}}
            className='btn'>Increment</button>
            <button onClick={decrementCounter} style={{margin: " 0 5px"}}>Decrement</button>
            <button onClick={resetCounter} style={{margin: " 0 5px"}}>Reset</button>
        </div>
    )
}

export default Counter;