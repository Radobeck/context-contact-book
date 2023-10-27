import React from 'react';
import { useContext } from 'react';
import { counterContext } from '../contexts/CounterContextProvider';

const Counter = () => {
  const { count, increment, decrement } = useContext(counterContext);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={decrement}>MINUS</button>
      <button onClick={increment}>PLUS</button>
    </div>
  );
};

export default Counter;
