import { type } from '@testing-library/user-event/dist/type';
import React, {useReducer} from 'react';
import './counterApp.css';

const initialState ={
    count: 0,
}

// define Reducer function
 const reducer = (state, action) => {
    if(action.type === 'INCREMENT'){
        return{
            ...state,
            count: state.count + 1
        }
    }else if(action.type === 'DECREMENT'){
        return{
            ...state,
            count: state.count - 1
        }
    }else{
        return state;
    }
 }

const CounterApp=() => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='counter-container'>
        <h1>React CounterApp</h1>
        <h2>{state.count}</h2>
        <button className='button' onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
        <button className='button' onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </div>
  );
};


const myApp = () => {
    return(
        <div>
            <CounterApp/>
        </div>
    )
}

export default myApp;