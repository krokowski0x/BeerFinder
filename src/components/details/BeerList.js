import React, { Component } from "react";
import { Card, Image, Modal } from "semantic-ui-react";

import BeerModal from "./BeerModal";
import BeerRating from "./BeerRating";

export default class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: this.props.beerList,
      currentBeer: null
    };
  }

  handleModalOpen = (e, id) => {
    // Current beer is the one that have been most recently clicked
    this.setState({ currentBeer: this.state.beerList[id - 1] });
  };

  render() {
    const { beerList, currentBeer } = this.state || null;

    return (
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
                <BeerModal currentBeer={currentBeer || beer} />
              </Modal.Content>
            </Modal>
          );
        })}
      </Card.Group>
    );
  }
}
