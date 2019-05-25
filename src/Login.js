import React, { useState } from "react";
import Keyboard from "./Keyboard";
import { getKey } from "./lib/fetching";

const Login = ({ setCookie }) => {
  const [appCode, setAppCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setLoading(true);
    getKey(appCode)
      .then(res => {
        if (!res.data.regToken) {
          setLoading(false);
          setError(new Error("Failed to authenticate!"));
        } else {
          setCookie("gbKey", res.data.regToken, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
            secure: true,
            sameSite: "strict"
          });
        }
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
    clear();
  };

  return (
    <div>
      <p>{appCode ? appCode : "——————"}</p>
      <Keyboard handleLetters={addLetter} backSpace={backSpace} clear={clear} />
      <button onClick={login}>Log in</button>
      <p>{loading && "Loading..."}</p>
      <p>{error && error.message}</p>
    </div>
  );
};

export default Login;
