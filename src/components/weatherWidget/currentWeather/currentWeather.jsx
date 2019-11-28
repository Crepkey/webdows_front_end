import React from "react";
import CurrentWeatherDetails from "./currentDetails";
import CurrentWeatherMain from "./currentMain";

const CurrentWeather = props => {
  return (
    <div className="current-weather">
      <h3>Current Conditions</h3>
      <div className="current-weather-container">
        <CurrentWeatherMain
          weatherIconType={props.currentWeather.WeatherIcon}
          weatherText={props.currentWeather.WeatherText}
        />
        <CurrentWeatherDetails currentWeather={props.currentWeather} />
      </div>
    </div>
  );
};

export default CurrentWeather;
