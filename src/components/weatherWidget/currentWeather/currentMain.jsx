import React from "react";
import WeatherIcon from "../weatherIcon";
import Styled from "styled-components";

const LargeText = Styled.h3`
  color: white;
  font-size: 130%;
`;

const CurrentWeatherMain = props => {
  return (
    <div className="current-weather-main">
      <WeatherIcon weatherIconType={props.weatherIconType} />
      <LargeText>{props.weatherText}</LargeText>
    </div>
  );
};

export default CurrentWeatherMain;
