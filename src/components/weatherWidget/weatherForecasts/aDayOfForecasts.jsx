import React from "react";
import Styled from "styled-components";

/* Components */
import Temperature from "../temperature";
import WeatherIcon from "../weatherIcon";
import WeekDay from "./weekDay";

const DailyDetailsContainer = Styled.div`
  border: solid;
  border-radius: 25px;
  border-color: #18232e;
  margin: 5px;
  padding: 5px;
  text-align: center;
  width: 128px;
  background-color: #18232e;
`;

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
    <DailyDetailsContainer>
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
    </DailyDetailsContainer>
  );
};

export default ADayOfForecasts;
