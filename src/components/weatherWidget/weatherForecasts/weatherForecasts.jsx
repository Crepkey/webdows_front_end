import React from "react";
import ADayOfForecasts from "./aDayOfForecasts";

const WeatherForecasts = props => {
  return (
    <div className="weather-forecasts">
      {/* TODO: Here I need to change this solution to REACT SUSPENSE */}
      {props.weatherForecasts.DailyForecasts !== undefined &&
        props.weatherForecasts.DailyForecasts.map(day => (
          <ADayOfForecasts key={day.Date} detailsOfTheDay={day} />
        ))}
    </div>
  );
};

export default WeatherForecasts;
