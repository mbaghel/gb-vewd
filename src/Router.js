import React, { useState } from "react";
import ListVideos from "./ListVideos";

const Router = ({ setLoggedIn }) => {
  const [currentVideo, setVideo] = useState(null);

  if (!currentVideo) {
    return (
      <>
        <Logout setLoggedIn={setLoggedIn} />
        <ListVideos />
      </>
    );
  }
  return <p>video is: {currentVideo}</p>;
};

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

export default Router;
