import React from "react";
import Temperature from "../temperature";
import WeatherIcon from "../weatherIcon";
import WeekDay from "./weekDay";

const ADayOfForecasts = props => {
  const date = props.detailsOfTheDay.Date;

  const { Icon, IconPhrase } = props.detailsOfTheDay.Day;

  const {
    Value: maxValue,
    Unit: maxUnit
  } = props.detailsOfTheDay.Temperature.Maximum;

  const {
    Value: minValue,
    Unit: minUnit
  } = props.detailsOfTheDay.Temperature.Minimum;

  return (
    <div className="a-day-of-forecasts">
      <WeekDay date={date} />

      <WeatherIcon weatherIconType={Icon} />

      {/* Icon Phrase which descripes the weather in one word */}
      <div className="icon-phrase">
        <h3>{IconPhrase}</h3>
      </div>

      {/* Maximum temperature */}
      <Temperature
        key={date + "_max"}
        color={"red"}
        value={maxValue}
        unit={maxUnit}
      />

      {/* Minimum temperature */}
      <Temperature
        key={date + "_min"}
        color={"blue"}
        value={minValue}
        unit={minUnit}
      />
    </div>
  );
};

export default ADayOfForecasts;
