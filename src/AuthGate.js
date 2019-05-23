import React, { useState } from "react";
import Login from "./Login";

const AuthGate = props => {
  const [loginState, setLoginState] = useState(
    localStorage.getItem("gbKey") ? true : false
  );

  if (loginState) return props.children(setLoginState);

  return <Login setLoggedIn={setLoginState} />;
};

export default AuthGate;
