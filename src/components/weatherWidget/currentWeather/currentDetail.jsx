import React from "react";
import WeatherIcon from "../weatherIcon";

const CurrentDetail = props => {
  const { weatherIconType, style, data, suffix } = props;

  return (
    <div className="current-weather-details">
      <WeatherIcon weatherIconType={weatherIconType} style={style} />
      <span className="current-weather-details-text">
        {data + " " + suffix}
      </span>
    </div>
  );
};

export default CurrentDetail;
