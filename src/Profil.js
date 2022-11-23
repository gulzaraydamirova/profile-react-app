import React, { Component } from "react";
import Name from "./Name";
import Email from "./Email";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";

class Profil extends Component {
  render() {
    const { name, surname, address, email, date, color, height } = this.props;
    return (
      <div className="App">
        <Name name={name} surname={surname} />
        <Address address={address} />
        <Email email={email} />
        <PersonalInfo date={date} color={color} height={height} />
      </div>
    );
  }
}

export default Profil;
