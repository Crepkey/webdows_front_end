import React from "react";
import WeatherIcon from "../weatherIcon";

const CurrentDetail = props => {
  const { weatherIconType, style, data } = props;

  return (
    <div>
      <WeatherIcon weatherIconType={weatherIconType} style={style} />
      <h3>{data}</h3>
    </div>
  );
};

export default CurrentDetail;