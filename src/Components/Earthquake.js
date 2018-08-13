import React, { Component } from "react";

class Earthquake extends Component {
  render() {
    let eq = this.props.earthquakes;
    console.log(eq);

    let quakes = eq.map((quake, index) => {
      return <p key={index}>{quake.properties.title}</p>;
    });

    return <div>{quakes}</div>;
  }
}

export default Earthquake;
