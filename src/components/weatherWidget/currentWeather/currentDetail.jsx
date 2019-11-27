import React from "react";
import WeatherIcon from "../weatherIcon";

const CurrentDetail = props => {
  const { weatherIconType, style, data, suffix } = props;

  return (
    <div className="current-weather-details">
      <WeatherIcon weatherIconType={weatherIconType} style={style} />
      <h3>{data + " " + suffix}</h3>
    </div>
  );
};

export default CurrentDetail;
