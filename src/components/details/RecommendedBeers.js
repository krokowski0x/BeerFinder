import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Segment, Loader } from "semantic-ui-react";

const RecommendedBeers = props => {
  return (
    <Grid.Row columns={3} style={{ textAlign: "center" }}>
      {props.recommended.length !== 0 ? (
        // Take only `amount` recommended beers
        props.recommended.slice(0, props.amount).map(beer => (
          <Grid.Column key={beer.name}>
            <Link
              to={`/details/${beer.id}`}
              onClick={() => window.location.reload()}
            >
              <Image src={beer.image_url} style={{ height: "8rem" }} centered />
              <h2 style={{ color: "#000" }}>{beer.name}</h2>
            </Link>
          </Grid.Column>
        ))
      ) : (
        <Segment
          loading
          style={{ margin: "5% auto", height: "5rem", width: "100%" }}
        >
          <Loader active />
        </Segment>
      )}
    </Grid.Row>
  );
};

export default RecommendedBeers;
