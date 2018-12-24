import React, { Component } from "react";
import { Segment, Loader, Container } from "semantic-ui-react";

import BeerList from "../details/BeerList";

export default class BeerCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: [],
      beerList: []
    };
  }

  componentDidMount() {
    let query = this.state.query;
    // Get beers out of local storage
    for (let beer in localStorage) query.push(beer);

    this.setState({ query });
    fetch(`https://api.punkapi.com/v2/beers?ids=${this.state.query.join("|")}`)
      .then(res => res.json())
      .then(beerList => this.setState({ beerList }));
  }

  render() {
    return (
      <Container style={{ margin: "10% 0" }}>
        <h2>Your Beers:</h2>
        <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(45deg, #00d664, cyan)",
            marginBottom: "5%"
          }}
        />
        {this.state.beerList.length !== 0 ? (
          <BeerList beerList={this.state.beerList} />
        ) : (
          <Segment loading>
            <Loader active inline="centered" />
          </Segment>
        )}
      </Container>
    );
  }
}
