import React from "react";

import AuthGate from "./AuthGate";
import Router from "./Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthGate>{setLoggedIn => <Router setLoggedIn={setLoggedIn} />}</AuthGate>
    </div>
  );
}

export default App;
