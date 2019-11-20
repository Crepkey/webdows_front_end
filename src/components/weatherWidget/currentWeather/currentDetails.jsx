import React from "react";
import DetailsIcon from "./detailsIcon";
import Temperature from "../temperature";

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
      <DetailsIcon iconType="humidity" />
      {/* TODO: I must use a new umbrella icon which fits mush more better to the current elements */}
      <DetailsIcon iconType="umbrella" />
      <DetailsIcon iconType="wind" />
    </div>
  );
};

export default CurrentWeatherDetails;
