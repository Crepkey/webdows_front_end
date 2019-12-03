import React from "react";
import Temperature from "../temperature";
import CurrentDetail from "./currentDetail";

/* TODO: I must use a new umbrella icon which fits mush more better to the current elements */

const CurrentWeatherDetails = props => {
  const {
    PrecipitationSummary: Summary,
    RelativeHumidity
  } = props.currentWeather;

  const windSpeed = props.currentWeather.Wind.Speed.Metric.Value;

  const { Value, Unit } = props.currentWeather.Temperature.Metric;

  const iconStyle = { float: "left", width: "64px", height: "47px" };

  const calculateAvgOfRain = () => {
    let total = 0;
    const days = Object.keys(Summary).length;
    for (let day in Summary) {
      total += Summary[day].Metric.Value;
    }
    const result = total / days;
    const roundedResult = result.toString().slice(0, 3);
    return roundedResult;
  };

  return (
    <div className="current-weather-details">
      <Temperature value={Value} unit={Unit} size="large" />

      {/* Humidity */}
      <CurrentDetail
        weatherIconType="Humidity"
        data={RelativeHumidity}
        style={iconStyle}
        suffix="%"
      />

      {/* AVG of Rain */}
      <CurrentDetail
        weatherIconType="Umbrella"
        data={calculateAvgOfRain()}
        style={iconStyle}
        suffix="mm"
      />

      {/* Wind */}

      <CurrentDetail
        weatherIconType="Wind"
        data={windSpeed}
        style={iconStyle}
        suffix="km"
      />
    </div>
  );
};

export default CurrentWeatherDetails;
