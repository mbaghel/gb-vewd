import React from "react";
import withFetch from "./withFetch";
import ListWithPagination from "./ListWithPagination";

const SearchList = withFetch((api, user, props) =>
  api.search(user, props.query, { page: props.offset / 10 + 1 })
)(ListWithPagination);

const SearchResults = props => {
  if (!props.query) return null;
  return (
    <>
      <p>Results for: "{props.query}"</p>
      <SearchList {...props} />
    </>
  );
};

export default SearchResults;
