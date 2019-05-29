import React from "react";
import { Link } from "react-router-dom";
import withFetch from "./withFetch";

const ListVideos = props => {
  const { loading, error, data } = props;

  const listVideos = data => {
    return data.results.map(vid => (
      <Link to={`/video/${vid.id}`} key={vid.id}>
        <h5>{vid.name}</h5>
        <p>{vid.deck}</p>
      </Link>
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <div>{listVideos(data)}</div>;
  // *** TODO: handle next or prev clicks by fetching next group of vids
};

export default withFetch((api, user) => api.videos(user))(ListVideos);
