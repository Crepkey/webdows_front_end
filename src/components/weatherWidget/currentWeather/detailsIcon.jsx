import React from "react";

import Humidity from "../../../img/weather_icon_07.png";
import Umbrella from "../../../img/weather_icon_45.png";
import Wind from "../../../img/weather_icon_05.png";
import NoPicture from "../../../img/weather_icon_0.png";

const DetailsIcon = props => {
  switch (props.iconType) {
    case "humidity":
      return (
        <img
          className="current-weather-details-icon"
          src={Humidity}
          width="64"
          height="47"
          alt="humidity"
        />
      );
    case "umbrella":
      return (
        <img
          className="current-weather-details-icon"
          src={Umbrella}
          width="64"
          height="47"
          alt="humidity"
        />
      );
    case "wind":
      return (
        <img
          className="current-weather-details-icon"
          src={Wind}
          width="64"
          height="47"
          alt="humidity"
        />
      );
    default:
      return (
        <img
          className="current-weather-details-icon"
          src={NoPicture}
          width="64"
          height="47"
          alt="humidity"
        />
      );
  }
};

export default DetailsIcon;
