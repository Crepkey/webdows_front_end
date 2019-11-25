import React from "react";
import DetailsIcon from "./detailsIcon";

const Humidity = props => {
  return (
    <div className="current-weather-details">
      <DetailsIcon iconType="humidity" />
      <h3>{props.relativeHumidity} %</h3>
    </div>
  );
};

export default Humidity;
