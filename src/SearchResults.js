import React from "react";
import withFetch from "./withFetch";
import ListVideos from "./ListVideos";

const SearchResults = props => {
  const { query, loading, error, data } = props;

  if (!query) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <p>Results for: "{query}"</p>
      <ListVideos data={data} />
    </>
  );
};

export default withFetch((api, user, props) => api.search(user, props.query))(
  SearchResults
);
