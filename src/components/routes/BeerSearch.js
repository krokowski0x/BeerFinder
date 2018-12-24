import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Icon,
  Segment,
  Loader,
  Container,
  Button,
  Message
} from "semantic-ui-react";

import BeerList from "../details/BeerList";
import SearchField from "../home/SearchField";

export default class BeerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.match.params.query || "",
      beerList: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${this.state.query}`)
      .then(res => res.json())
      .then(beerList => this.setState({ beerList, loading: false }));
  }

  render() {
    return (
      <Container style={{ margin: "20% 0", textAlign: "center" }}>
        <SearchField query={this.state.query} />
        <h3>
          Don't know the names of BrewDog beers?
          <br />
          <Link to="/beer_finder/beer_name=punk_ipa">
            <Button
              animated="vertical"
              size="medium"
              style={{
                background: "#00d664",
                color: "#FFF",
                margin: "1rem 0"
              }}
            >
              <Button.Content hidden>
                <Icon name="arrow down" />
              </Button.Content>
              <Button.Content visible>
                Try our Custom Beer Finder!
              </Button.Content>
            </Button>
          </Link>
        </h3>
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
        ) : this.state.loading ? (
          <Segment loading>
            <Loader active inline="centered" />
          </Segment>
        ) : (
          <Message negative style={{ textAlign: "center" }}>
            <h3>Ooooops, that beer doesn't exist :c</h3>
          </Message>
        )}
      </Container>
    );
  }
}
