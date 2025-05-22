import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
📝 Short Note: Why counter is not increasing
In React, using a regular variable 
like let counter = 0 won't update 
the UI when the value changes 
because React doesn't track changes
 to normal variables.

✅ Fix: Use the useState hook to create reactive state.


const [counter, setCounter] = useState(0);

useState tells React to track counter.

Updating with setCounter(counter + 1) re-renders the component with the new value.

Without useState, UI won't reflect changes.
*/
function App() {
  let [counter, setCounter] = useState(0);

  let addValue = () => {
    let newCounter = counter + 1;
    if (newCounter > 20) {
      newCounter = 20;
    }
    setCounter(newCounter);
  };

  let decreaseValue = () => {
    let newCounter = counter - 1;
    if (newCounter < 0) {
      newCounter = 0;
    }
    setCounter(newCounter);
  };

  return (
    <>
      <h1>Car aur horn</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;