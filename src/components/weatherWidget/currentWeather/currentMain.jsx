import React from "react";
import WeatherIcon from "../weatherIcon";
import Loader from "../../loader";

const CurrentWeatherMain = props => {
  return (
    <div className="current-weather-main">
      <Loader
        type={1}
        name="weatherIconType"
        data={props.weatherIconType}
        style={{ padding: "10px 33px 10px 33px" }}
      >
        <WeatherIcon />
      </Loader>

      <Loader
        type={2}
        name="weathertext"
        data={props.weatherText}
        style={{ padding: "5px 40px 5px 40px" }}
      >
        <h3 className="large-text">{props.weatherText}</h3>
      </Loader>
    </div>
  );
};

export default CurrentWeatherMain;
