import React from "react";
import { getVideos } from "./lib/fetching";
import useFetch from "./useFetch";

const ListVideos = ({ setVideo }) => {
  const { loading, error, data } = useFetch(getVideos);

  const playVideo = e => {
    e.preventDefault();
    setVideo(e.currentTarget.dataset.id);
  };

  const listVideos = data => {
    return data.results.map(vid => (
      <a href="#" onClick={e => playVideo(e)} key={vid.id} data-id={vid.id}>
        <h5>{vid.name}</h5>
        <p>{vid.deck}</p>
      </a>
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <div>{listVideos(data)}</div>;
};

export default ListVideos;
