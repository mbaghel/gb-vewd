import React from "react";
import withFetch from "./withFetch";
import ListVideos from "./ListVideos";

const SearchList = withFetch((api, user, props) =>
  api.search(user, props.query)
)(ListVideos);

const SearchResults = ({ query }) => {
  if (!query) return null;
  return (
    <>
      <p>Results for: "{query}"</p>
      <SearchList query={query} />
    </>
  );
};

export default SearchResults;
