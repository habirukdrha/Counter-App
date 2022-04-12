import React, { useState, forwardRef, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    alterToogle() {
      setToogle(!toogle);
    },
  }));

  const [toogle, setToogle] = useState(true);

  return (
    <React.Fragment>
      <button className="btn btn-sm btn-danger m-2">Button from child</button>
      {toogle && <span>Toogle</span>}
    </React.Fragment>
  );
});

export default Button;
