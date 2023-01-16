import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { CounterContext, useCounterStore } from './context/counterContext';

const App = observer(() => {
  const myCounter = useCounterStore();
  return (
    <div style={{ textAlign: 'center', padding: 16 }}>
      카운트: {myCounter.count}
      <br />
      <br />
      마이너스?: {myCounter.isNegative}
      <br />
      <br />
      <button onClick={() => myCounter.increment()}>+</button>
      <button onClick={() => myCounter.decrement()}>-</button>
    </div>
  );
});

App.contextType = CounterContext;
export default App;
