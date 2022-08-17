import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results";
import { useNavigate } from "react-router";
import { Logger } from "../logger/logger";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const [searchBy, setSearchBy] = useState("businessName");
  const navigate = useNavigate();

  // functions for searches
  const handleSearch = async () => {
    setResults(null);
    const response = await fetch(
      `http://finalspringboot-env.eba-psqhnabc.us-east-1.elasticbeanstalk.com/search/rental/${searchBy}/${searchBy}?${searchBy}=${search}`
    );
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log(message);
      return;
    }

    const results = await response.json();
    console.log(results.toString());
    setResults(results);
    setSearch("");
    navigate("/search");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    console.log(searchBy);

    handleSearch();
  }

  // a useEffect to ensure a user is logged in, if not redirect to login page
  useEffect(() => {
    if (!props.isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h1 id="search">Search</h1>
      <form id="searchForm" onSubmit={handleSubmit}>
        <br />
        <div>
          <label id="radiobuttons">
            <input
              type="radio"
              name="searchBy"
              value="province"
              onChange={(e) => setSearchBy(e.target.value)}
            />
            Province
          </label>
          <label id="radiobuttons">
            <input
              type="radio"
              name="searchBy"
              value="city"
              onChange={(e) => setSearchBy(e.target.value)}
            />
            City
          </label>
          <label id="radiobuttons">
            <input
              type="radio"
              name="searchBy"
              value="street"
              onChange={(e) => setSearchBy(e.target.value)}
            />
            Street
          </label>
          <label id="radiobuttons">
            <input
              type="radio"
              name="searchBy"
              value="rentalType"
              onChange={(e) => setSearchBy(e.target.value)}
            />
            Rental Type
          </label>
          <br />
        </div>
        <br />
        <input
          id="submit"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <button id="submit" type="submit">
          Submit Search
        </button>
      </form>
      <br />
      {results ? (
        <div>
          {<Results results={results} user={props.user} />}
        </div>
      ) : null}
    </div>
  );
};


export default Search;
