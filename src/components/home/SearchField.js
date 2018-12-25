import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Icon, Message } from "semantic-ui-react";

export default class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query || "ipa",
      error: false
    };
  }

  render() {
    return (
      <div>
        <Input
          onChange={e => {
            // Only letters and spaced are allowed
            if (e.target.value.replace(" ", "").match(/([A-Za-z]+)/g))
              this.setState({
                query: e.target.value.trim().replace(" ", "_"),
                error: false
              });
            else this.setState({ error: true });
          }}
          icon={
            <Link to={this.state.error ? "/" : `/search/${this.state.query}`}>
              <Icon
                name="search"
                circular
                size="large"
                onClick={() => window.location.reload()}
              />
            </Link>
          }
          placeholder="Search for name, style, etc."
          size="large"
          style={{ width: "40vw" }}
        />
        {this.state.error ? (
          <Message
            error
            color="pink"
            header="Hey, don't try to fool me!!!"
            content="You know only letters and spaced are allowed, right?"
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
