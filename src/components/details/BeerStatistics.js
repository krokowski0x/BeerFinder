import React from "react";
import { Button, Popup } from "semantic-ui-react";

const BeerStatistics = props => {
  const { ibu, abv, ebc } = props;

  return (
    <div style={{ margin: "2% 0" }}>
      <Popup
        trigger={
          <Button
            content="IBU"
            icon="leaf"
            label={{ as: "a", basic: true, content: `${ibu}` }}
            labelPosition="right"
          />
        }
        content="The International Bittering Units scale, or simply IBU scale, is used to approximately quantify the bitterness of beer. This scale is not measured on the perceived bitterness of the beer, but rather the amount of iso-alpha acids."
      />
      <Popup
        trigger={
          <Button
            content="ABV"
            icon="martini glass"
            label={{ as: "a", basic: true, content: `${abv}` }}
            labelPosition="right"
          />
        }
        content="The most common method of estimating the strength of a beer is to measure the density of the wort. The most common method measuring the density of a liquid is with a hydrometer in ABV (Alcohol by Volume)"
      />
      <Popup
        trigger={
          <Button
            content="EBC"
            icon="lab"
            label={{ as: "a", basic: true, content: `${ebc}` }}
            labelPosition="right"
          />
        }
        content="The EBC convention measures beer and wort colour, as well as quantifying turbidity (also known as haze) in beer."
      />
    </div>
  );
};

export default BeerStatistics;
