import React from "react";
import CurrentWeatherDetails from "./currentDetails";
import CurrentWeatherMain from "./currentMain";

const CurrentWeather = props => {
  /* TODO: Why does not the object destructuring work here? */
  return (
    <div className="current-weather">
      <CurrentWeatherMain
        weatherIconNumber={props.currentWeather.WeatherIcon}
        weatherText={props.currentWeather.WeatherText}
      />
      <CurrentWeatherDetails />
    </div>
  );
};

export default CurrentWeather;
