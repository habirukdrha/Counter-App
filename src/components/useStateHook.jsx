import React, { useState } from "react";

const UseStateHook = () => {
  let [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("...");

  const handleIncrement = () => {
    setCounter((counter = counter + 1));
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <main className="container">
      <h4>Use State Hook</h4>
      {counter}
      <button className="btn btn-success btn-sm m-2" onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <input
        placeholder="Enter something..."
        className="m-2"
        onChange={handleChange}
      />
      {inputValue}
    </main>
  );
};

export default UseStateHook;
