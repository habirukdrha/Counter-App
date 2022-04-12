import React, { useContext } from "react";
import { AppContext } from "./useContextHook";

const User = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h4>User: {username}</h4>
    </div>
  );
};

export default User;
