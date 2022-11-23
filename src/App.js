import React, { Component } from "react";
import "./App.css";
import Profil from "./Profil";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Profil
          name="Gulzar"
          surname="Aydamirova"
          address="Sumqayit"
          email="gulaidameer@gmail.com"
          color="chameleon"
          date="07.10.2003"
          height="166cm"
        />

        <Profil
          name="Nazrin"
          surname="Imamverdiyeva"
          address="Razin"
          email="nazrinimamverdiyeva@gmail.com"
          color="brown"
          date="14.05.2003"
          height="160cm"
        />

        <Profil
          name="Elvira"
          surname="Eyyubova"
          address="Xırdalan"
          email="elviraeyyubova@gmail.com"
          color="brown"
          date="14.07.2003"
          height="152cm"
        />
      </div>
    );
  }
}

export default App;
