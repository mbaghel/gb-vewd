import React, { useState } from "react";
import ListVideos from "./ListVideos";
import Video from "./Video";

const Router = ({ removeCookie }) => {
  const [currentVideo, setVideo] = useState(null);

  if (!currentVideo) {
    return (
      <>
        <Logout removeCookie={removeCookie} />
        <ListVideos setVideo={setVideo} />
      </>
    );
  }
  return <Video currentVideo={currentVideo} setVideo={setVideo} />;
};

function Logout(props) {
  const logout = () => {
    props.removeCookie("gbKey");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Router;
