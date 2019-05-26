import React from "react";
import AuthGate from "./AuthGate";
import Router from "./Router";

function App() {
  return <AuthGate>{logout => <Router logout={logout} />}</AuthGate>;
}

export default App;
