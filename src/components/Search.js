import { useState } from "react";

const Search = () => {
  const [searchText, setsearchText] = useState("Type your search here");

  return (
    <div className="search">
      <input type="text" className="searchBox" value={searchText} onChange={ (e) => {
        setsearchText(e.target.value);
      }}/>
      <button
        className="search-btn"
        onClick={() => {
          console.log(searchText);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
