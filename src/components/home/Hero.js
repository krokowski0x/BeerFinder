import React from "react";
import { Button, Icon } from "semantic-ui-react";

import Background from "../../img/background.jpg";
import SearchField from "./SearchField";

const Hero = props => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: " cover",
        position: "relative"
      }}
    >
      <div
        style={{
          color: "#FFF",
          textAlign: "center",
          padding: "30vh 5vw"
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "0" }}>
          Don't know what to drink tonight?
        </h1>
        <h2 style={{ fontSize: "1.5rem", marginTop: "0" }}>
          We will help you make the right choice!
        </h2>
        <div>
          <SearchField />
          <h3 style={{ margin: "1rem" }}>Or simply</h3>
          <Button
            // Slide to beer list
            onClick={e =>
              window.scroll({
                top: window.innerHeight - 50,
                left: 0,
                behavior: "smooth"
              })
            }
            animated="vertical"
            size="huge"
            style={{ background: "#00d664", color: "#FFF" }}
          >
            <Button.Content hidden>
              <Icon name="arrow down" />
            </Button.Content>
            <Button.Content visible>Browse All</Button.Content>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
