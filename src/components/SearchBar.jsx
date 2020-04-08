import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: {
        value: "",
        error: false,
      },
    };
  }
  updateState = (e) => {
    this.setState({
      searchField: {
        value: e.target.value,
        error: false,
      },
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.searchField.value !== "") {
      this.props.getGif(this.state.searchField.value);
    } else {
      this.setState({
        searchField: {
          ...this.state.searchField,
          error: true,
        },
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.searchField.value}
          onChange={this.updateState}
          className={this.state.searchField.error ? "error" : undefined}
          placeholder={this.state.searchField.error ? "Unvalid" : "Search..."}
        />
        <input type="submit" value="Let's go!" />
      </form>
    );
  }
}
