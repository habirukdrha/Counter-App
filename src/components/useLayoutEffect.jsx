import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Han G";
  }, []);

  return (
    <main className="container">
      <h4>Use Layout Effect</h4>
      <div className="App">
        <input ref={inputRef} value="dani" />
      </div>
    </main>
  );
};

export default UseLayoutEffect;
