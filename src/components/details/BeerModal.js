import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

import RecommendedBeers from "./RecommendedBeers";
import BeerDescription from "./BeerDescription";
import ReadMoreButton from "./ReadMoreButton";

export default class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeer: this.props.currentBeer,
      recommended: []
    };
  }

  async componentDidMount() {
    const { ibu, abv, ebc } = this.state.currentBeer;
    const url = "https://api.punkapi.com/v2/beers?";

    try {
      const recommended = [];
      // Fetch similar beers in case of abv, ibu and ebc
      const similarBeers = await Promise.all([
        fetch(`${url}ibu_gt=${Math.ceil(ibu)}`).then(res => res.json()),
        fetch(`${url}abv_gt=${Math.ceil(abv)}`).then(res => res.json()),
        fetch(`${url}ebc_gt=${Math.ceil(ebc)}`).then(res => res.json())
      ]);

      // Don't add duplicates (which are happening really often)
      for (let beers of similarBeers) {
        for (let beer of beers) {
          if (!recommended.includes(beer)) {
            recommended.push(beer);
          }
        }
      }
      this.setState({ recommended });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { currentBeer, recommended } = this.state || null;

    if (currentBeer.id)
      return (
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src={currentBeer.image_url} size="small" centered />
            </Grid.Column>
            <Grid.Column>
              <BeerDescription beer={currentBeer} />
              <ReadMoreButton id={currentBeer.id} />
            </Grid.Column>
          </Grid.Row>
          <h3 style={{ margin: "2% auto", textDecoration: "underline" }}>
            You might also like:
          </h3>
          <RecommendedBeers recommended={recommended} amount={3} />
        </Grid>
      );
    else return <div />;
  }
}
