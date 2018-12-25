import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const NavBar = props => {
  return (
    <Menu.Menu position={props.position} onClick={props.toggleMenu}>
      <Menu.Item>
        <Link to="/search/ipa">
          <Icon name="search" size="small" />
          Search
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/beer_finder/beer_name=punk_ipa">Beer Finder</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/my_beers">My Beers</Link>
      </Menu.Item>
    </Menu.Menu>
  );
};

export default NavBar;
