import React from "react";
import { useCookies } from "react-cookie";
import Login from "./Login";

const AuthGate = props => {
  const [cookies, setCookie, removeCookie] = useCookies(["gbKey"]);

  if (cookies.gbKey) return props.children(removeCookie);

  return <Login setCookie={setCookie} />;
};

export default AuthGate;
