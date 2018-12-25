import React from "react";
import { Card, Icon } from "semantic-ui-react";

const BeerIngredients = props => {
  const { malt, hops, yeast } = props.beer.ingredients;
  // Remove duplicates in a handy ES6+ way
  const hopsNoDups = [...new Set(hops.map(hop => hop.name))];

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Icon name="settings" size="large" />
          Ingredients
        </Card.Header>
        <Card.Meta>What's in there?</Card.Meta>
        <ul style={{ listStyle: "none", fontSize: "1.2rem" }}>
          {hopsNoDups.map(hop => (
            <li key={hop}>
              <Icon name="leaf" size="small" />
              {`${hop} Hops`}
            </li>
          ))}
          {malt.map(m => (
            <li key={m.name}>
              <Icon name="fire" size="small" />
              {m.name}
            </li>
          ))}
          <li>
            <Icon name="flask" size="small" />
            {yeast}
          </li>
        </ul>
      </Card.Content>
    </Card>
  );
};

export default BeerIngredients;
