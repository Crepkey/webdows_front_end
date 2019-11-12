import React from "react";
import Temperature from "../temperature";

const aDayOfForecasts = props => {
  return (
    <div className="a-day-of-forecasts">
      <Temperature
        key={props.detailsOfTheDay.Date}
        color={"red"}
        value={props.detailsOfTheDay.Temperature.Minimum.Value}
        unit={props.detailsOfTheDay.Temperature.Minimum.Unit}
      />
    </div>
  );
};

export default aDayOfForecasts;
