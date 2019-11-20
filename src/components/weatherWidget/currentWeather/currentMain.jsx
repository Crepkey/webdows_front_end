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
        height="140px"
        width="140px"
      >
        {/* TODO: I would be great if I can define the size of weather icon as a prop */}
        <WeatherIcon weatherIconNumber />
      </Loader>
      <h3>{props.weatherText}</h3>
    </div>
  );
};

export default CurrentWeatherMain;
