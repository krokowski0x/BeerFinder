import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Container,
  Dropdown,
  Segment,
  Loader,
  Message
} from "semantic-ui-react";

import BeerList from "../details/BeerList";

export default class BeerFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abv: "",
      ibu: "",
      ebc: "",
      loading: false,
      beerList: [],
      query: this.props.match.params.query || ""
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.punkapi.com/v2/beers?${this.state.query}`)
      .then(res => res.json())
      .then(beerList => this.setState({ beerList, loading: false }));
  }

  handlePickRequest = () => {
    window.location.reload();
  };

  render() {
    const { abv, ebc, ibu } = this.state;
    const options = [
      [
        { key: 1, text: "light", value: "abv_lt=3" },
        { key: 2, text: "session", value: "abv_gt=3&abv_lt=7" },
        { key: 3, text: "strong", value: "abv_gt=7" }
      ],
      [
        { key: 4, text: "pale", value: "ebc_lt=10" },
        { key: 5, text: "gold", value: "ebc_gt=10&ebc_lt=16" },
        { key: 6, text: "amber", value: "ebc_gt=16&ebc_lt=30" },
        { key: 8, text: "brown", value: "ebc_gt=30&ebc_lt=50" },
        { key: 9, text: "black", value: "ebc_gt=50" }
      ],
      [
        { key: 10, text: "not really", value: "ibu_lt=20" },
        { key: 11, text: "slightly", value: "ibu_gt=20&ibu_lt=40" },
        { key: 12, text: "heavily", value: "ibu_gt=40&ibu_lt=80" },
        { key: 13, text: "waaaay too", value: "ibu_gt=80" }
      ]
    ];

    return (
      <Container style={{ marginTop: "5%" }}>
        <div
          style={{
            lineHeight: "4rem",
            padding: "20vh 0",
            textAlign: "center",
            fontSize: "3rem"
          }}
        >
          <span>
            I'd like a beer that is{" "}
            <Dropdown
              onChange={(e, { value }) => this.setState({ abv: value })}
              options={options[0]}
              placeholder={options[0][0].text}
              value={abv}
            />{" "}
            ,{" "}
          </span>
          <span>
            <Dropdown
              onChange={(e, { value }) => this.setState({ ebc: value })}
              options={options[1]}
              placeholder={options[1][0].text}
              value={ebc}
            />{" "}
            and{" "}
          </span>
          <span>
            <Dropdown
              onChange={(e, { value }) => this.setState({ ibu: value })}
              options={options[2]}
              placeholder={options[2][0].text}
              value={ibu}
            />{" "}
            bitter.
          </span>
          <br />
          <Link to={`/beer_finder/${abv}&${ibu}&${ebc}`}>
            <Button
              onClick={this.handlePickRequest}
              animated="vertical"
              size="huge"
              style={{
                background: "#00d664",
                color: "#FFF"
              }}
            >
              <Button.Content hidden>
                <Icon name="arrow down" />
              </Button.Content>
              <Button.Content visible>Find that beer!</Button.Content>
            </Button>
          </Link>
        </div>
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
