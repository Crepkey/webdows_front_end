import React from "react";
import DetailsIcon from "./detailsIcon";
import Temperature from "../temperature";
import Humidity from "./humidity";
import ChanceForRain from "./avgOfRain";

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
      <ChanceForRain
        PrecipitationSummary={props.currentWeather.PrecipitationSummary}
      />
      <DetailsIcon iconType="wind" />
    </div>
  );
};

export default CurrentWeatherDetails;
