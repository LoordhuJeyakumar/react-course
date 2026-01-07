import React from "react";
import { useState } from "react";

function MyButton( { count, handleClick }) {
  return (
    <button onClick={handleClick} className="btn btn-primary">
      You clicked me {count} times
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(`Button clicked ${count + 1} times`);
  }

  function handleSecondClick() {
    setSecondCount(secondCount + 1);
    console.log(`Second button clicked ${secondCount + 1} times`);
  }

  return (
    <div className="container d-flex justify-center align-middle">
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={secondCount} handleClick={handleSecondClick} />
    </div>
  );
}

export default App;
