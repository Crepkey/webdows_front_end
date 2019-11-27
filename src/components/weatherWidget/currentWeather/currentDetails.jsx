import React from "react";
import Temperature from "../temperature";
import CurrentDetail from "./currentDetail";

{
  /* TODO: I must use a new umbrella icon which fits mush more better to the current elements */
}

const CurrentWeatherDetails = props => {
  const calculateAvgOfRain = () => {
    let totalRainAmount;
    const allDaysOfForecasts = Object.keys(
      props.currentWeather.PrecipitationSummary
    ).length;
    for (let pastPrecipitation in props.currentWeather.PrecipitationSummary) {
      totalRainAmount +=
        props.currentWeather.PrecipitationSummary[pastPrecipitation].Metric
          .Value;
    }
    const result = totalRainAmount / allDaysOfForecasts;

    return isNaN(result) ? 0 : result;
  };

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
      {/* Humidity */}
      <CurrentDetail
        weatherIconType="Humidity"
        data={props.currentWeather.RelativeHumidity}
        style={{ float: "left", width: "64px", height: "47px" }}
        suffix="%"
      />
      <CurrentDetail
        weatherIconType="Umbrella"
        data={
          props.currentWeather.PrecipitationSummary !== undefined &&
          calculateAvgOfRain()
        }
        style={{ float: "left", width: "64px", height: "47px" }}
        suffix="mm"
      />
      <CurrentDetail
        weatherIconType="Wind"
        data={
          props.currentWeather.Wind !== undefined &&
          props.currentWeather.Wind.Speed.Metric.Value
        }
        style={{ float: "left", width: "64px", height: "47px" }}
        suffix="km"
      />
    </div>
  );
};

export default CurrentWeatherDetails;
