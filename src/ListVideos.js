import React from "react";
import { Link } from "react-router-dom";

const ListVideos = ({ data }) => {
  const listVideos = data => {
    if (data) {
      return data.results.map(vid => (
        <Link to={`/video/${vid.id}`} key={vid.id}>
          <h5>{vid.name}</h5>
          <p>{vid.deck}</p>
        </Link>
      ));
    }
  };

  return <div>{listVideos(data)}</div>;
  // *** TODO: handle next or prev clicks by fetching next group of vids
};

export default ListVideos;
