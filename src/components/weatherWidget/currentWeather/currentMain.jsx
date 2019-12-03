import React from "react";
import WeatherIcon from "../weatherIcon";

const CurrentWeatherMain = props => {
  return (
    <div className="current-weather-main">
      <WeatherIcon weatherIconType={props.weatherIconType} />
      <h3 className="large-text">{props.weatherText}</h3>
    </div>
  );
};

export default CurrentWeatherMain;
