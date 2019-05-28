import React, { useContext } from "react";
import { UserDispatch } from "./AuthGate";

const Settings = () => {
  const dispatch = useContext(UserDispatch);

  const logout = () => {
    localStorage.removeItem("gbKey");
    dispatch({ type: "unregister" });
  };

  return (
    <div>
      <h2>Log Out?</h2>
      <button onClick={logout}>Yup!</button>
    </div>
  );
};

export default Settings;
