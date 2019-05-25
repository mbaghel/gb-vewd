import React from "react";
import { CookiesProvider } from "react-cookie";
import AuthGate from "./AuthGate";
import Router from "./Router";

function App() {
  return (
    <CookiesProvider>
      <AuthGate>
        {removeCookie => <Router removeCookie={removeCookie} />}
      </AuthGate>
    </CookiesProvider>
  );
}

export default App;
