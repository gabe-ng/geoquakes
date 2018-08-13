import React, { Component } from "react";

import Earthquake from "../Components/Earthquake";

class EarthquakeContainer extends Component {
  render() {
    console.log("Render ", this.props.earthquakes);
    return (
      <div className="earthquakeContainer">
        <h1>Earthquakes from the past week: </h1>
        <Earthquake earthquakes={this.props.earthquakes} />
      </div>
    );
  }
}

export default EarthquakeContainer;
