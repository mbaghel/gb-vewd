import React, { useState, useMemo } from "react";
import Keyboard from "./Keyboard";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [currentQuery, setCurrentQuery] = useState(null);

  const submitSearch = () => {
    setCurrentQuery(searchString);
    setSearchString("");
  };

  const showResults = useMemo(() => <SearchResults query={currentQuery} />, [
    currentQuery
  ]);

  return (
    <div>
      <p>{searchString ? searchString : "——————"}</p>
      <Keyboard setText={setSearchString} />
      <button onClick={submitSearch}>Submit</button>
      {showResults}
    </div>
  );
};

export default Search;
