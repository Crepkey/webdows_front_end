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

    const error = message => {
      const currentCoordinates = message;
      this.setState({ currentCoordinates });
    };

    const settings = {
      enableHighAccuracy: true /* We want to enable high accuracy in the defining of coordinates*/,
      timeout: 5000 /* We don't want to wait longer than 5 seconds for a response */,
      maximumAge: 10000 /* We don't want gps data that is older than 10 seconds */
    };

    navigator.geolocation.getCurrentPosition(success, error, settings);
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
