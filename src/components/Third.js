import React from "react";
import { useState, useEffect, useRef } from "react";

const Third = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  const [time, setTime] = useState(1);
  const [input, setInput] = useState("");

  function handleClick() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    document.title = `Clicked ${counter} times`;
    setNumber(counter + 1);
  }, [counter]);

  const inputRef = useRef();
  const intervalRef = useRef();

  function refButton() {
    inputRef.current.focus();
  }

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setTime(time + 1);
  //     console.log(time + " seconds has passed");
  //   }, 1000);

  //   intervalRef.current = id;

  //   return () => clearInterval(intervalRef.current);
  // });

  return (
    <div className="App-header">
      <h1>Hooks: useState, useEffect, useRef</h1>
      <button className="counter" onClick={handleClick}>
        Counter: {counter}
      </button>
      <p>counter + 1 = {number}</p>
      <br />
      <input
        onChange={(event) => setInput(event.target.value)}
        value={input}
        ref={inputRef}
      />
      {console.log(inputRef)}
      <h1>{input}</h1>
      <button className="counter2" onClick={refButton}>
        Focus the input
      </button>
    </div>
  );
};

export default Third;
