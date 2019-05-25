import React from "react";
import useFetch from "./useFetch";
import { getUrls } from "./lib/fetching";
import Player from "./Player";

const Video = props => {
  const { loading, error, data } = useFetch(getUrls, {
    id: props.currentVideo
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  const { saved_time: savedTime, ...urls } = data.results;
  return <Player savedTime={savedTime} urls={urls} setVideo={props.setVideo} />;
};

export default Video;
