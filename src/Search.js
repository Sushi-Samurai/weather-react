import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  _handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  _submit = (event) => {
    event.preventDefault();
    this.props.refresh(this.state.value);
  };

  render() {
    return (
      <form className="float-left" onSubmit={this._submit}>
        <input
          type="text"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus={true}
          onChange={this._handleChange}
          value={this.state.value}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
  }
}
