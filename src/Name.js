import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Surname: {this.props.surname}</p>
      </div>
    );
  }
}

export default Name;
