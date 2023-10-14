import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.refresh(this.state.value);
  };

  render() {
    return (
      <form className="float-left" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus={true}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
  }
}
