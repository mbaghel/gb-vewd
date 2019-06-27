import React from "react";
import withFetch from "./withFetch";
import ShowCard from "./ShowCard";
import CardContainer from "./CardContainer";

const Shows = props => {
  const { loading, error, data } = props;

  const listShows = data => {
    return data.results.map(show => <ShowCard key={show.id} show={show} />);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <CardContainer>{listShows(data)}</CardContainer>;
};

export default withFetch((api, user) =>
  api.shows(user, { sort: "latest:desc" })
)(Shows);
