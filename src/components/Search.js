import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search({ setSearch }) {
  const [inputText, setInputText] = useState("");

  const submitBtn = async (e) => {
    await setSearch("");
    e.preventDefault();
    setSearch(inputText);
    console.log(inputText);
  };

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 search-input"
          value={inputText}
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-dark" onClick={submitBtn} type="submit">
          <Link className="nav-link" to={`/${inputText}`}>
            Search
          </Link>
        </button>
      </form>
    </div>
  );
}
export default Search;
