import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <p>Eye color: {this.props.color}</p>
        <p>Birth Date: {this.props.date}</p>
        <p>Height: {this.props.height}</p>
      </div>
    );
  }
}

export default PersonalInfo;
