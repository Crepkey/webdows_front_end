import React from "react";
import ADayOfForecasts from "./aDayOfForecasts";

const WeatherForecasts = props => {
  return (
    <div className="weather-forecasts">
      {props.weatherForecasts.DailyForecasts !== undefined &&
        props.weatherForecasts.DailyForecasts.map(day => (
          <ADayOfForecasts key={day.Date} detailsOfTheDay={day} />
        ))}
    </div>
  );
};

export default WeatherForecasts;
