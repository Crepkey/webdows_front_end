import React from "react";
import DetailsIcon from "./detailsIcon";

const Wind = props => {
  return (
    <div className="current-weather-details">
      <DetailsIcon iconType="wind" />
      <h3>{props.WindSpeed} km</h3>
    </div>
  );
};

export default Wind;
