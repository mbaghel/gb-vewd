import React, { useState } from "react";
import Keyboard from "./Keyboard";
import SearchResults from "./SearchResults";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [currentQuery, setCurrentQuery] = useState(null);

  const addLetter = e => {
    setSearchString(searchString + e.target.innerText);
  };

  const backSpace = () => {
    setSearchString(searchString.slice(0, -1));
  };

  const clear = () => {
    setSearchString("");
  };

  const submitSearch = () => {
    setCurrentQuery(searchString);
    clear();
  };

  return (
    <div>
      <p>{searchString ? searchString : "——————"}</p>
      <Keyboard handleLetters={addLetter} backSpace={backSpace} clear={clear} />
      <button onClick={submitSearch}>Submit</button>
      <SearchResults query={currentQuery} />
    </div>
  );
};

export default Search;
