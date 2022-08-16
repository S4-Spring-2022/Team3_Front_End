import React from "react";
import { useState, useEffect } from "react";
import Results from "./Results";
import { useNavigate } from "react-router";
import { Logger } from "../logger/logger";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const [searchBy, setSearchBy] = useState("businessName");
  // const [database, setDatabase] = useState("");
  // const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // const logger = new Logger();

  // may reactivate if we decide/ determine we need to keep logs
  // const logSearch = async () => {
  //   // setMessage(logger.create(props.user, search, database, new Date()));
  //   console.log(message);
  //   await fetch("http://localhost:5000/log", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(message),
  //   }).catch((error) => {
  //     window.alert(error);
  //     return;
  //   });
  // };

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

  // only one database so only need to handle search
  // const handleSearchPostgres = async () => {
  //   setResults(null);
  //   const response = await fetch(
  //     `http://localhost:5000/search/${database}/${search}`
  //   );
  //   if (!response.ok) {
  //     const message = `An error occurred: ${response.statusText}`;
  //     console.log(message);
  //     return;
  //   }
  //   const results = await response.json();
  //   console.log(results);
  //   setResults(results);
  //   setSearch("");
  //   navigate("/search");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    console.log(searchBy);
   
    handleSearch();
    // setMessage(logger.create(props.user, search, new Date()));
  }

  // a useEffect to ensure a use is logged in, if not redirect to login page
  useEffect(() => {
    if (!props.isLoggedIn) {
      navigate("/");
    }
  }, []);

  // a use effect to log the search when the message is set
  // useEffect(() => {
  //   if (message !== "") {
  //     logSearch();
  //   }
  // }, [message]);

// dependant on the logs, therefore deactivated until/if we reactivate logging
  // const searchHistory = async (e) => {
  //   e.preventDefault();
  //   // setDatabase("");
  //   const response = await fetch(`http://localhost:5000/log/${props.user}`);
  //   if (!response.ok) {
  //     const message = `An error occurred: ${response.statusText}`;
  //     console.log(message);
  //     return;
  //   }
  //   const results = await response.json();
  //   console.log(results);
  //   setResults(results);
  // };

  return (
    <div>
      <h1>Search</h1>
      <form id="searchForm" onSubmit={handleSubmit}>
        {/* <div>
          <input
            type="radio"
            name="database"
            value="mongo"
            onChange={(e) => setDatabase(e.target.value)}
          />
          <label>Mongo</label>
          <input
            type="radio"
            name="database"
            value="postgres"
            onChange={(e) => setDatabase(e.target.value)}
          />
          <label>PostgreSQL</label>
        </div> */}
        <br />
          <div>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="province"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              Province
            </label>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="city"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              City
            </label>
            <label>
              <input
                type="radio"
                name="searchBy"
                value="street"
                onChange={(e) => setSearchBy(e.target.value)}
              />
              Street
            </label>
            <label>
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
        {/* <input type="submit" value="Submit Search" onSubmit={handleSubmit}/> */}
        <button id="submit" type="submit">
          Submit Search
        </button>
      </form>
      <br />
      {/* <form onSubmit={searchHistory}>
        <button id="submit" type="submit">
          Search History
        </button>
      </form> */}
      {results ? (
        <div>
          {<Results results={results} user={props.user} />}
        </div>
      ) : null}
    </div>
  );
};


export default Search;
