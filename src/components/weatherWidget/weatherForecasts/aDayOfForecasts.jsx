import React from "react";
import Temperature from "../temperature";
import WeatherIcon from "../weatherIcon";
import WeekDay from "./weekDay";

const ADayOfForecasts = props => {
  return (
    <div className="a-day-of-forecasts">
      <WeekDay date={props.detailsOfTheDay.Date} />
      <WeatherIcon weatherIconNumber={props.detailsOfTheDay.Day.Icon} />
      {/* Icon Phrase which descripes the weather in one word */}
      <h3>{props.detailsOfTheDay.Day.IconPhrase}</h3>
      {/* Maximum temperature */}
      <Temperature
        key={props.detailsOfTheDay.Date + "_max"}
        color={"red"}
        value={props.detailsOfTheDay.Temperature.Maximum.Value}
        unit={props.detailsOfTheDay.Temperature.Maximum.Unit}
      />
      {/* Minimum temperature */}
      <Temperature
        key={props.detailsOfTheDay.Date + "_min"}
        color={"blue"}
        value={props.detailsOfTheDay.Temperature.Minimum.Value}
        unit={props.detailsOfTheDay.Temperature.Minimum.Unit}
      />
    </div>
  );
};

export default ADayOfForecasts;
