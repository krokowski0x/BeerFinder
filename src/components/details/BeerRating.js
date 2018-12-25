import React from "react";
import { Rating } from "semantic-ui-react";

const BeerRating = props => {
  const { id } = props;

  return (
    <Rating
      style={{ marginRight: "0.75rem" }}
      size="huge"
      icon="heart"
      onClick={e => {
        // If this item is not in local storage, add it
        if (!localStorage.getItem(id)) localStorage.setItem(id, true);
        // Otherwise remove it
        else localStorage.removeItem(id);
      }}
      // There is a Warning in a console
      // but that's Semantic UI's fault i guess
      rating={!!localStorage.getItem(id)}
      maxRating={1}
    />
  );
};

export default BeerRating;
