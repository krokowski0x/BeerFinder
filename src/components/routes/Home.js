import React, { Component } from "react";
import { Container, Loader, Segment, Message } from "semantic-ui-react";
import { Card, Image, Modal } from "semantic-ui-react";

import BeerModal from "../details/BeerModal";
import BeerRating from "../details/BeerRating";
import Hero from "../home/Hero";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      beerList: [],
      page: 1,
      beersPerPage: 20,
      scrolling: false,
      noMoreBeer: false
    };
  }

  componentDidMount() {
    this.loadBeers();
    this.scrollListener = window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { scrolling, beerList } = this.state;
    if (scrolling) return;

    if (beerList.length) {
      // Find the bottom and full height
      const lastItem = document.querySelector(`footer`);
      const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;

      // When close to the bottom, load more beers
      if (pageOffset > lastItemOffset - 10) this.loadMoreBeers();
    }
  };

  loadBeers = () => {
    const { beerList, page, beersPerPage } = this.state;
    fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersPerPage}`
    )
      .then(res => res.json())
      .then(newBeers => {
        if (!newBeers.length) {
          // If there's nothing more to fetch, stop trying
          this.setState({ noMoreBeer: true, scrolling: false });
          window.removeEventListener("scroll", this.handleScroll);
        } else
          this.setState({
            // Concat new beers with previous
            beerList: [...beerList, ...newBeers],
            scrolling: false
          });
      });
  };

  loadMoreBeers = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      scrolling: true
    }));
    this.loadBeers();
  };
  handleModalOpen = (e, id) => {
    this.setState({
      currentBeer: this.state.beerList[id - 1]
    });
  };
  render() {
    const { beerList } = this.state;

    return (
      <div>
        <Hero />
        <Container style={{ margin: "5% 0" }}>
          <h2>Our Beers:</h2>
          <div
            style={{
              height: "3px",
              width: "100%",
              background: "linear-gradient(45deg, #00d664, cyan)",
              marginBottom: "5%"
            }}
          />
          {beerList.length !== 0 ? (
            // This is the BeerList component but there is an issue
            // with mapping props to state, so this should do for now
            <Card.Group itemsPerRow={4} stackable>
              {beerList.map(beer => {
                return (
                  <Modal
                    key={beer.name}
                    trigger={
                      <Card
                        style={{
                          padding: "1%",
                          boxShadow: "4px 4px 2px 0px rgba(0,0,0,0.3)",
                          borderRadius: "20px"
                        }}
                        key={beer.name}
                        id={beer.id}
                        onClick={e => this.handleModalOpen(e, beer.id)}
                      >
                        <Card.Content extra textAlign="right">
                          <BeerRating id={beer.id} />
                        </Card.Content>
                        <Image
                          src={beer.image_url}
                          style={{ height: "10rem" }}
                          centered
                        />
                        <Card.Content textAlign="center">
                          <Card.Header>{beer.name}</Card.Header>
                          <Card.Meta>{beer.tagline}</Card.Meta>
                        </Card.Content>
                      </Card>
                    }
                    closeIcon
                  >
                    <Modal.Content>
                      <BeerModal currentBeer={this.state.currentBeer || beer} />
                    </Modal.Content>
                  </Modal>
                );
              })}
            </Card.Group>
          ) : (
            <Segment loading>
              <Loader active inline="centered" />
            </Segment>
          )}
          {this.state.scrolling ? (
            <Segment loading style={{ margin: "5% 0", height: "5rem" }}>
              <Loader active />
            </Segment>
          ) : this.state.noMoreBeer ? (
            <Message negative style={{ textAlign: "center" }}>
              <h3>Ooooops, there's no more beer left :c</h3>
            </Message>
          ) : (
            <div />
          )}
        </Container>
      </div>
    );
  }
}
