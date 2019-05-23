import React from "react";

import AuthGate from "./AuthGate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthGate>{setLoggedIn => <Logout setLoggedIn={setLoggedIn} />}</AuthGate>
    </div>
  );
}

function Logout(props) {
  const logout = () => {
    localStorage.removeItem("gbKey");
    props.setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
