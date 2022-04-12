import Button from "./button";
import React, { useRef } from "react";

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <main className="container">
      <h4>Use Imperative Handle</h4>
      <button
        onClick={() => {
          buttonRef.current.alterToogle();
        }}
        className="btn btn-sm btn-warning m-2"
      >
        Button in parent
      </button>
      <br />
      <Button ref={buttonRef} />
    </main>
  );
};

export default UseImperativeHandle;
