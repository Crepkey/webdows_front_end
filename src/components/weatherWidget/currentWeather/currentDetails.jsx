import React from "react";
import Temperature from "../temperature";
import CurrentDetail from "./currentDetail";

/* TODO: I must use a new umbrella icon which fits mush more better to the current elements */

const CurrentWeatherDetails = props => {
  const iconStyle = { float: "left", width: "64px", height: "47px" };

  const { PrecipitationSummary: summary } = props.currentWeather;

  const calculateAvgOfRain = () => {
    let total = 0;
    const days = Object.keys(summary).length;
    for (let day in summary) {
      total += summary[day].Metric.Value;
    }
    const result = total / days;
    const roundedResult = result.toString().slice(0, 3);
    return roundedResult;
  };

  return (
    <div className="current-weather-details">
      {/* Temperature */}

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
        style={iconStyle}
        suffix="%"
      />

      {/* AVG of Rain */}

      <CurrentDetail
        weatherIconType="Umbrella"
        data={
          props.currentWeather.PrecipitationSummary !== undefined &&
          calculateAvgOfRain()
        }
        style={iconStyle}
        suffix="mm"
      />

      {/* Wind */}

      <CurrentDetail
        weatherIconType="Wind"
        data={
          props.currentWeather.Wind !== undefined &&
          props.currentWeather.Wind.Speed.Metric.Value
        }
        style={iconStyle}
        suffix="km"
      />
    </div>
  );
};

export default CurrentWeatherDetails;
