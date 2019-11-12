import React from "react";
import ADayOfForecasts from "./aDayOfForecasts";

const weatherForecasts = props => {
  console.log(props.weatherForecasts);
  return (
    <div className="weather-forecasts">
      <h1>Weather Forecasts</h1>
      <ADayOfForecasts />
    </div>
  );
};

export default weatherForecasts;
