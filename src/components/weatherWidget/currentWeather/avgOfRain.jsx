import React from "react";
import DetailsIcon from "./detailsIcon";

const AvgOfRain = props => {
  /* TODO: This is a little cheat, I need to find a correct solution for calculation */
  const calculateChanceForRain = () => {
    let totalRainAmount;
    const allDaysOfForecasts = Object.keys(props.PrecipitationSummary).length;
    for (let pastPrecipitation in props.PrecipitationSummary) {
      totalRainAmount +=
        props.PrecipitationSummary[pastPrecipitation].Metric.Value;
    }
    const result = totalRainAmount / allDaysOfForecasts;

    return isNaN(result) ? 0 : result;
  };

  return (
    <div className="current-weather-details">
      <DetailsIcon iconType="umbrella" />
      <h3>
        {props.PrecipitationSummary !== undefined && calculateChanceForRain()}{" "}
        mm
      </h3>
    </div>
  );
};

export default AvgOfRain;
