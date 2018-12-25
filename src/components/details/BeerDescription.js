import React from "react";

import BeerStatistics from "./BeerStatistics";
import BeerRating from "./BeerRating";

const BeerDescription = props => {
  const {
    id,
    name,
    tagline,
    ibu,
    abv,
    ebc,
    description,
    food_pairing
  } = props.beer;

  return (
    <div>
      <h2>
        <BeerRating id={id} />
        {name}
      </h2>
      <h3>{tagline}</h3>
      <div
        style={{
          height: "5px",
          width: "80%",
          borderRadius: "10px",
          background: "linear-gradient(45deg, #00d664, cyan)"
        }}
      />
      <BeerStatistics abv={abv} ibu={ibu} ebc={ebc} />
      <p>{description}</p>
      <h4>Best server with:</h4>
      <ul>
        {food_pairing.map(dish => (
          <li key={dish}>{dish}</li>
        ))}
      </ul>
    </div>
  );
};

export default BeerDescription;
