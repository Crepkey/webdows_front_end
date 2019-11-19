import React from "react";
import CurrentWeatherDetails from "./currentDetails";
import CurrentWeatherMain from "./currentMain";

const CurrentWeather = props => {
  return (
    <div className="current-weather">
      <CurrentWeatherMain
        weatherIconNumber={props.currentWeather.WeatherIcon}
        weatherText={props.currentWeather.WeatherText}
      />
      <CurrentWeatherDetails currentWeather={props.currentWeather} />
    </div>
  );
};

export default CurrentWeather;
