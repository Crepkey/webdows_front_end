import React, { Component } from "react";
import Draggable from "react-draggable";

class WeatherWidget extends Component {
  state = {
    currentCoordinates: {}
  };

  componentDidMount() {
    this.getWeather();
  }

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

    const success = async position => {
      const currentCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.setState({ currentCoordinates });
      const locationKey = await this.getLocationKey();
      const currentWeather = await this.getCurrentWeatherConditions(
        locationKey
      );
      this.setState({ currentWeather: currentWeather[0] });
      console.log(this.state);
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
    //REFACTOR: Link creation step could be a new function because of it is twice in that code
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

    let requestURL =
      process.env.REACT_APP_ACCU_WEATHER_GET_LOCATION_KEY_API_URL + "?";

    for (let key in queryParamters) {
      requestURL += key + "=" + queryParamters[key] + "&";
    }

    requestURL = requestURL.substring(
      0,
      requestURL.length - 1 /* Removing the last unnecessary "&" character */
    );

    return fetch(requestURL)
      .then(response => response.json())
      .then(data => {
        return data.Key;
      });
  };

  getCurrentWeatherConditions = async locationKey => {
    //REFACTOR: This code is reapeated. It is necessary to grab it and reorganizing it to a new function
    const queryParamters = {
      apikey: process.env.REACT_APP_ACCU_WEATHER_API_KEY,
      language: "en-us",
      details: false
    };

    let requestURL =
      process.env.REACT_APP_ACCU_WEATHER_GET_CURRENT_CONDITION_API_URL +
      locationKey +
      "?";

    for (let key in queryParamters) {
      requestURL += key + "=" + queryParamters[key] + "&";
    }

    requestURL = requestURL.substring(
      0,
      requestURL.length - 1 /* Removing the last unnecessary "&" character */
    );

    return fetch(requestURL).then(response => {
      return response.json();
    });
  };

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
