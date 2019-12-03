import React from "react";
import WeatherIcon from "../weatherIcon";

const CurrentDetail = props => {
  const { weatherIconType, style, data, suffix } = props;

  return (
    <div className="current-weather-detail">
      <WeatherIcon weatherIconType={weatherIconType} style={style} />
      <span className="current-weather-detail-text">{data + " " + suffix}</span>
    </div>
  );
};

export default CurrentDetail;
