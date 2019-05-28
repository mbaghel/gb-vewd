import React, { useReducer } from "react";
import Login from "./Login";

const initialState = () => localStorage.getItem("gbKey");

const reducer = (state, action) => {
  switch (action.type) {
    case "register":
      return action.payload;
    case "unregister":
      return null;
    default:
      throw new Error("invalid action");
  }
};

const User = React.createContext(null);
const UserDispatch = React.createContext(null);

const AuthGate = props => {
  const [registeredUser, userDispatch] = useReducer(reducer, initialState());

  return (
    <User.Provider value={registeredUser}>
      <UserDispatch.Provider value={userDispatch}>
        {registeredUser ? (
          props.children
        ) : (
          <Login userDispatch={userDispatch} />
        )}
      </UserDispatch.Provider>
    </User.Provider>
  );
};

export { User, UserDispatch };
export default AuthGate;
