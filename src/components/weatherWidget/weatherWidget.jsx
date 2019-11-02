import React, { Component } from "react";
import Draggable from "react-draggable";

class WeatherWidget extends Component {
  state = {
    currentCoordinates: {}
  };

  getCurrentCoordinates = () => {
    const success = position => {
      const currentCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.setState({ currentCoordinates });
    };

    navigator.geolocation.getCurrentPosition(success);
  };

  componentDidMount() {
    this.getCurrentCoordinates();
  }

  render() {
    return (
      <Draggable>
        <div>
          <h1>{this.state.currentCoordinates.latitude}</h1>
        </div>
      </Draggable>
    );
  }
}

export default WeatherWidget;
