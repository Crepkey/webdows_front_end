import React, { Component } from "react";
import Draggable from "react-draggable";

class WeatherWidget extends Component {
  state = {
    currentCoordinates: {}
  };

  getWeather = () => {
    if (!navigator.geolocation) {
      let locality = prompt(
        "Geolocation is not supported by your browser. Please type the name of your locality:",
        "Budapest"
      );
      if (locality === null) {
        const currentCoordinates = `Your current coordinates are unavailable. 
          Please check the list of supported browser or type your locality manually by the refreshing of your browser`;
        this.setState({ currentCoordinates });
      }
      return;
    }

    const success = position => {
      const currentCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.setState({ currentCoordinates });
      this.getLocationKey();
    };

    const error = message => {
      alert(`The following error happened: ${message}`);
    };

    const settings = {
      enableHighAccuracy: true /* We want to enable high accuracy in the defining of coordinates*/,
      timeout: 5000 /* We don't want to wait longer than 5 seconds for a response */,
      maximumAge: 10000 /* We don't want gps data that is older than 10 seconds */
    };

    navigator.geolocation.getCurrentPosition(success, error, settings);
  };

  getLocationKey = () => {
    const queryParamters = {
      apikey: process.env.REACT_APP_ACCU_WEATHER_API_KEY,
      q:
        this.state.currentCoordinates.latitude +
        "%2C" +
        this.state.currentCoordinates.longitude,
      language: "en-us",
      details: false,
      toplevel: false
    };

    let queryString =
      process.env.REACT_APP_ACCU_WEATHER_GET_LOCATION_KEY_API_URL + "?";

    for (let key in queryParamters) {
      queryString += key + "=" + queryParamters[key] + "&";
    }

    queryString = queryString.substring(
      0,
      queryString.length - 1 /* Removing the last unnecessary "&" character */
    );

    console.log(queryString);
  };

  componentDidMount() {
    this.getWeather();
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
