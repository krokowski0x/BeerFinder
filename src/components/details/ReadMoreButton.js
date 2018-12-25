import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const ReadMoreButton = props => {
  return (
    <Link to={`/details/${props.id}`}>
      <Button
        animated
        size="large"
        style={{
          background: "linear-gradient(45deg, #00d664, cyan)",
          color: "#FFF"
        }}
      >
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
        <Button.Content visible>Read More</Button.Content>
      </Button>
    </Link>
  );
};

export default ReadMoreButton;
