import React, { useState, useMemo } from "react";
import Keyboard from "./Keyboard";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [currentQuery, setCurrentQuery] = useState(null);
  const [offset, setOffset] = useState(0);

  const submitSearch = () => {
    setOffset(0);
    setCurrentQuery(searchString);
    setSearchString("");
  };

  const showResults = useMemo(
    () => (
      <SearchResults
        query={currentQuery}
        offset={offset}
        setOffset={setOffset}
      />
    ),
    [currentQuery, offset]
  );

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
