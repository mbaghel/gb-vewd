import React from "react";
import { Link } from "react-router-dom";
import withFetch from "./withFetch";

const Shows = props => {
  const { loading, error, data } = props;

  const listShows = data => {
    return data.results.map(show => (
      <Link to={`/show/${show.id}`} key={show.id}>
        <h5>{show.title}</h5>
        <p>{show.deck}</p>
      </Link>
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <div>{listShows(data)}</div>;
};

export default withFetch((api, user) => api.shows(user))(Shows);
