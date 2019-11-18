import React, { Component } from "react";
import CurrentWeatherDetails from "./currentDetails";

const CurrentWeather = props => {
  return (
    <div className="current-weather">
      <h3>Current Weather</h3>
      <CurrentWeatherDetails />
    </div>
  );
};

export default CurrentWeather;
