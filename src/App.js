import React, { Component } from "react";

import EarthquakeModel from "./Models/Earthquake";
import EarthquakeContainer from "./Containers/EarthquakeContainer";
import MapContainer from "./Containers/MapContainer";

class App extends Component {
  state = {
    earthquakes: []
  };

  componentDidMount = () => {
    console.log("EQContainer Mounted");
    this.fetchData();
  };

  fetchData = () => {
    console.log("fetching data");

    EarthquakeModel.all()
      .then(response => this.setState({ earthquakes: response.data.features }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="app">
          <MapContainer earthquakes={this.state.earthquakes} />
          <EarthquakeContainer earthquakes={this.state.earthquakes} />
        </div>
    );
  }
}

export default App;
