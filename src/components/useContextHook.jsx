import React, { createContext, useState } from "react";
import User from "./user";
import Login from "./login";

export const AppContext = createContext("");

const UseContextHook = () => {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <main className="container">
        <h4>Use Context Hook</h4>
        <User /> <Login />
      </main>
    </AppContext.Provider>
  );
};

export default UseContextHook;
