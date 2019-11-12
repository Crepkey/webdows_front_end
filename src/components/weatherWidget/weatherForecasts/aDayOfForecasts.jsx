import React from "react";
import Temperature from "../temperature";

const aDayOfForecasts = props => {
  return (
    <Temperature
      key={props.detailsOfTheDay.Date}
      color={"red"}
      value={props.detailsOfTheDay.Temperature.Minimum.Value}
      unit={props.detailsOfTheDay.Temperature.Minimum.Unit}
    />
  );
};

export default aDayOfForecasts;
