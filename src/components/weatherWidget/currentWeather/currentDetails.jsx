import React from "react";
import DetailsIcon from "./detailsIcon";
import Temperature from "../temperature";
import Loader1 from "../../loader1";

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
      <Loader1 />
      <DetailsIcon iconType="humidity" />
      {/* TODO: I must use a new umbrella icon which fits mush more better to the current elements */}
      <DetailsIcon iconType="umbrella" />
      <DetailsIcon iconType="wind" />
    </div>
  );
};

export default CurrentWeatherDetails;
