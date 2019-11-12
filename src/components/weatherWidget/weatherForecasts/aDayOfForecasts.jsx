import React from "react";
import temperature from "../temperature";

const aDayOfForecasts = props => {
  return (
    <temperature
      key={props.detailsOfTheDay.Date}
      color={"blue"}
      value={props.detailsOfTheDay.Temperature.Minimum.Value}
      unit={props.detailsOfTheDay.Temperature.Minimum.Unit}
    />
  );
};

export default aDayOfForecasts;
