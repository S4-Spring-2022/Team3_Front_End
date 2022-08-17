import React from "react";
import { useState, useEffect } from "react";

const Results = (props) => {
  const results = props.results;
  const [shortResults, setShortResults] = useState([]);

  useEffect(() => {
    setShortResults(results);

  }, []);

  if (results.length > 0) {

    return (
      <div>
        <h1 id="results">Results</h1>
        <hr />

        {shortResults.map((result) => (

          <div>
            <hr />
            <h2 class="rentalTitle">{result.rentalDescription}</h2>
            <hr />
            <h3 id="rentalinfo">Availability: {result.rentalStatus}</h3>
            <h3 id="rentalinfo">Rental type: {result.rentalType}</h3>
            <h3 id="rentalinfo">Rating: {result.rentalScore} Stars</h3>
            <h3 id="rentalinfo">Nightly Rate: ${result.rentalPrice}.00</h3>
            <h3 id="rentalinfo">Renting Since: {result.rentalListDate}</h3>
          </div>

        ))}

      </div>
    )
  }
};

export default Results;
