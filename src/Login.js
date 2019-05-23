import React, { useState } from "react";
import Keyboard from "./Keyboard";

const Login = ({ setLoggedIn }) => {
  const [appCode, setAppCode] = useState("");

  const addLetter = e => {
    setAppCode(appCode + e.target.innerText);
  };

  const backSpace = () => {
    setAppCode(appCode.slice(0, -1));
  };

  const clear = () => {
    setAppCode("");
  };

  const login = () => {
    localStorage.setItem("gbKey", process.env.REACT_APP_KEY);
    setLoggedIn(true);
  };

  return (
    <div>
      <p>{appCode ? appCode : "——————"}</p>
      <Keyboard handleLetters={addLetter} backSpace={backSpace} clear={clear} />
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default Login;
