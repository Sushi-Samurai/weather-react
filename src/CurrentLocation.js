import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CurrentLocation extends Component {
  static propTypes = {
    refresh: PropTypes.func.isRequired,
  };

  _click = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.refresh(position.coords.latitude, position.coords.longitude);
    });
  };

  render() {
    return (
      <button className="btn btn-success float-right" onClick={this._click}>
        Current
      </button>
    );
  }
}
