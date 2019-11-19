import React from "react";
import WeatherIcon from "../weatherIcon";

const CurrentWeatherMain = props => {
  return (
    <div>
      <h3>Current Weather</h3>
      <WeatherIcon weatherIconNumber={props.weatherIconNumber} />
      <h3>{props.weatherText}</h3>
    </div>
  );
};

export default CurrentWeatherMain;
