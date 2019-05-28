import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthGate from "./AuthGate";
import VideoSwitch from "./VideoSwitch";

function App() {
  return (
    <Router>
      <AuthGate>
        <VideoSwitch />
      </AuthGate>
    </Router>
  );
}

export default App;
