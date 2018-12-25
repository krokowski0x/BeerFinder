import React, { Component } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { slide as Burger } from "react-burger-menu";
import { Menu } from "semantic-ui-react";

import NavBar from "./NavBar";
import NetguruLogo from "../../img/netguru_logo.png";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  // Reacr burger menu doesn't work like that apparently
  toggleMenu = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  };
  render() {
    return (
      <Menu
        secondary
        style={{
          background: "#FFF",
          margin: "0",
          position: "fixed",
          top: "0",
          width: "100%",
          height: "4.5rem",
          zIndex: "99"
        }}
      >
        <Link
          // While in '/' it scrolls up, otherwise it goes to '/'
          to="/"
          onClick={e =>
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth"
            })
          }
        >
          <Menu.Item>
            <h1>
              <span style={{ color: "#00d664" }}>BEER</span>
              <span>GURU</span>
            </h1>
            <MediaQuery minWidth={600}>
              <span style={{ marginLeft: "5%" }}>by</span>
              <img
                alt="Netguru logo"
                src={NetguruLogo}
                style={{ height: "3rem", width: "auto" }}
              />
            </MediaQuery>
          </Menu.Item>
        </Link>
        <MediaQuery minWidth={600}>
          <NavBar position="right" />
        </MediaQuery>
        <MediaQuery maxWidth={600}>
          <Burger right isOpen={this.state.isOpen}>
            <NavBar isOpen={this.isOpen} />
          </Burger>
        </MediaQuery>
      </Menu>
    );
  }
}
