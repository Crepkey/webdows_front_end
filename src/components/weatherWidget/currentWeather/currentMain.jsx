import React from "react";
import WeatherIcon from "../weatherIcon";
import Loader from "../../loader";

const CurrentWeatherMain = props => {
  return (
    <div>
      <h3>Current Weather</h3>
      <Loader
        data={props.weatherIconNumber}
        name="weatherIconNumber"
        type={1}
        style={{ padding: "33px", width: "63", height: "63" }}
      >
        <WeatherIcon weatherIconNumber />
      </Loader>
      <h3>{props.weatherText}</h3>
    </div>
  );
};

export default CurrentWeatherMain;
