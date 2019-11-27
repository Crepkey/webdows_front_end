import React from "react";
import Temperature from "../temperature";
import Humidity from "./humidity";
import AvgOfRain from "./avgOfRain";
import Wind from "./wind";

/* REFACTOR: Here I use three different comp but I could solve it only one comp */

const CurrentWeatherDetails = props => {
  return (
    <div>
      <h3>Details</h3>
      {props.currentWeather.Temperature !== undefined && (
        <Temperature
          value={props.currentWeather.Temperature.Metric.Value}
          unit={props.currentWeather.Temperature.Metric.Unit}
          size="large"
        />
      )}
      <Humidity relativeHumidity={props.currentWeather.RelativeHumidity} />
      {/* TODO: I must use a new umbrella icon which fits mush more better to the current elements */}
      <AvgOfRain
        PrecipitationSummary={props.currentWeather.PrecipitationSummary}
      />
      {props.currentWeather.Wind !== undefined && (
        <Wind WindSpeed={props.currentWeather.Wind.Speed.Metric.Value} />
      )}
    </div>
  );
};

export default CurrentWeatherDetails;
