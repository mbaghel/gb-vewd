import React, { useState } from "react";
import Login from "./Login";

const AuthGate = props => {
  const [isLoggedIn, setLogin] = useState(
    localStorage.getItem("gbKey") ? true : false
  );

  const logout = () => {
    localStorage.removeItem("gbKey");
    setLogin(false);
  };

  if (isLoggedIn) return props.children(logout);

  return <Login setLogin={setLogin} />;
};

export default AuthGate;
