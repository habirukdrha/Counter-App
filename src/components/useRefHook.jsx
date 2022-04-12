import React, { useRef } from "react";

const UseRef = () => {
  let inputRef = useRef(null);

  const onClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <main className="container">
      <h4>Use Ref Hook</h4>
      <input type="text" placeholder="Ex.." className="m-2" ref={inputRef} />
      <button className="btn btn-primary btn-sm m-2" onClick={onClick}>
        Change name
      </button>
    </main>
  );
};

export default UseRef;
