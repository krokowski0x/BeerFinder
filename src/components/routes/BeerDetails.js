import React, { Component } from "react";
import { Grid, Image, Segment, Loader } from "semantic-ui-react";

import BeerDescription from "../details/BeerDescription";
import BeerIngredients from "../details/BeerIngredients";
import RecommendedBeers from "../details/RecommendedBeers";

export default class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBeer: {},
      recommended: []
    };
  }

  componentDidMount() {
    fetch(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(result => this.setState({ currentBeer: result[0] }))
      .then(() => this.beerFetched());
  }

  async beerFetched() {
    const { ibu, abv, ebc } = this.state.currentBeer;
    const url = "https://api.punkapi.com/v2/beers?";

    try {
      const recommended = [];
      const similarBeers = await Promise.all([
        fetch(`${url}ibu_gt=${Math.ceil(ibu)}`).then(res => res.json()),
        fetch(`${url}abv_gt=${Math.ceil(abv)}`).then(res => res.json()),
        fetch(`${url}ebc_gt=${Math.ceil(ebc)}`).then(res => res.json())
      ]);

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
    const { currentBeer, recommended } = this.state;
    if (currentBeer.id)
      return (
        <Grid style={{ margin: "10vh 0" }}>
          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              <Image src={currentBeer.image_url} size="small" centered />
            </Grid.Column>
            <Grid.Column width={10}>
              <BeerDescription beer={currentBeer} />
              <BeerIngredients beer={currentBeer} />
            </Grid.Column>
          </Grid.Row>{" "}
          <h3 style={{ margin: "2% auto", textDecoration: "underline" }}>
            You might also like:
          </h3>
          <RecommendedBeers recommended={recommended} amount={6} />
        </Grid>
      );
    else
      return (
        <Segment loading style={{ margin: "5% 0" }}>
          <Loader active inline="centered" />
        </Segment>
      );
  }
}
