import React from "react";
import { Link } from "react-router-dom";

const ListVideos = props => {
  const { loading, error, data } = props;
  const listVideos = data =>
    data.results.map(vid => (
      <Link to={`/video/${vid.id}`} key={vid.id}>
        <h5>{vid.name}</h5>
        <p>{vid.deck}</p>
      </Link>
    ));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) return <div>{listVideos(data)}</div>;
  // *** TODO: handle next or prev clicks by fetching next group of vids
};

export default ListVideos;
