import React, { useState } from "react";
import ListVideos from "./ListVideos";
import Video from "./Video";

const Router = ({ logout }) => {
  const [currentVideo, setVideo] = useState(null);

  if (!currentVideo) {
    return (
      <>
        <Logout logout={logout} />
        <ListVideos setVideo={setVideo} />
      </>
    );
  }
  return <Video currentVideo={currentVideo} setVideo={setVideo} />;
};

function Logout(props) {
  return (
    <div>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

export default Router;
