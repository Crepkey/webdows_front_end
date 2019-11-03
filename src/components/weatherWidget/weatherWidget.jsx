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

  getLocationKey = () => {
    const API_address =
      process.env.REACT_APP_ACCU_WEATHER_GET_LOCATION_KEY_API_URL;
    const header = new Headers();
    fetch(API_address, header);
  };

  componentDidMount() {
    this.getCurrentCoordinates();
    console.log(process.env.REACT_APP_ACCU_WEATHER_API_KEY);
  }

  render() {
    return (
      <Draggable>
        <div>
          <h1>{this.state.currentCoordinates.latitude}</h1>
          <h2>VALAMI</h2>
          <h1>{process.env.REACT_APP_ACCU_WEATHER_API_KEY}</h1>
        </div>
      </Draggable>
    );
  }
}

export default WeatherWidget;
