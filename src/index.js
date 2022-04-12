import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import UseStateHook from "./components/useStateHook";
import ReducerHook from "./components/useReducerHook";
import UseEffect from "./components/useEffectHook";
import UseRef from "./components/useRefHook";
import UseLayoutEffect from "./components/useLayoutEffect";
import UseImperativeHandle from "./components/useImperativeHandle";
import UseContextHook from "./components/useContextHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseStateHook />
    <ReducerHook />
    <UseEffect />
    <UseRef />
    <UseLayoutEffect />
    <UseImperativeHandle />
    <UseContextHook />
  </React.StrictMode>
);

reportWebVitals();
