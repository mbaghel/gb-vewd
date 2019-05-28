import React, { useState } from "react";
import useFetch from "./useFetch";
import Player from "./Player";

const Video = props => {
  const [options] = useState({ id: props.match.params.id });
  const { loading, error, data } = useFetch("video", options);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  const { saved_time: savedTime, ...urls } = data.results;
  return <Player savedTime={savedTime} urls={urls} />;
};

export default Video;
