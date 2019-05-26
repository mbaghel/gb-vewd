import React, { useCallback } from "react";
import useFetch from "./useFetch";
import { getUrls } from "./lib/fetching";
import Player from "./Player";

const Video = props => {
  const { currentVideo, setVideo } = props;
  const fetchUrls = useCallback(() => getUrls({ id: currentVideo }), [
    currentVideo
  ]);
  const { loading, error, data } = useFetch(fetchUrls);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  const { saved_time: savedTime, ...urls } = data.results;
  return <Player savedTime={savedTime} urls={urls} setVideo={setVideo} />;
};

export default Video;
