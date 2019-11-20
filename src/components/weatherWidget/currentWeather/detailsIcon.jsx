import React from "react";

import Humidity from "../../../img/weather_icon_07.png";
import Umbrella from "../../../img/weather_icon_45.png";
import Wind from "../../../img/weather_icon_05.png";
import NoPicture from "../../../img/weather_icon_0.png";

/* TODO: Why are the icons higher in the browser than in Photoshop. This is true the entire design too.*/

const DetailsIcon = props => {
  switch (props.iconType) {
    case "humidity":
      return <img src={Humidity} width="64" height="47" alt="humidity" />;
    case "umbrella":
      return <img src={Umbrella} width="64" height="47" alt="humidity" />;
    case "wind":
      return <img src={Wind} width="64" height="47" alt="humidity" />;
    default:
      return <img src={NoPicture} width="64" height="47" alt="humidity" />;
  }
};

export default DetailsIcon;
