/* React */
import React, { useContext } from "react";

/* Contexts */
import { ApplicationContext } from "./applicationContext";

/* Components */
import LaunchIcon from "./launchIcon";
import WeatherWidget from "./weatherWidget/weatherWidget";
import DummyDiv from "./dummies/dummyDiv";
import DummyDiv2 from "./dummies/dummyDiv2";
import Calculator from "./dummies/calc";
import Todo from "./dummies/todo";

/* Desktop Icons */
import WeatherLaunchIcon from "../img/desktopIcons/weather-app.png";
import CalculatorLaunchIcon from "../img/desktopIcons/calc-app.png";
import TodoLaunchIcon from "../img/desktopIcons/todo-app.png";
import DummyLaunchIcon from "../img/desktopIcons/dummy-app.png";

/* Styles */
import Styled from "styled-components";

const IconsContainer = Styled.div`
    position: absolute;
    display: inline-block;
`;

const DesktopIcons = () => {
  const { startApp } = useContext(ApplicationContext);
  const iconSize = { height: "75px", width: "75px" };

  return (
    <IconsContainer>
      <LaunchIcon
        size={iconSize}
        onDoubleClick={() => startApp(<WeatherWidget />, WeatherLaunchIcon)}
        iconPath={WeatherLaunchIcon}
        iconText="Weather"
        shadow={true}
        padding="15px"
      />

      <LaunchIcon
        size={iconSize}
        onDoubleClick={() => startApp(<DummyDiv />, DummyLaunchIcon)}
        iconPath={DummyLaunchIcon}
        iconText="Dummy"
        shadow={true}
        padding="15px"
      />

      <LaunchIcon
        size={iconSize}
        onDoubleClick={() => startApp(<DummyDiv2 />, DummyLaunchIcon)}
        iconPath={DummyLaunchIcon}
        iconText="Fake"
        shadow={true}
        padding="15px"
      />

      <LaunchIcon
        size={iconSize}
        onDoubleClick={() => startApp(<Calculator />, CalculatorLaunchIcon)}
        iconPath={CalculatorLaunchIcon}
        iconText="Calculator"
        shadow={true}
        padding="15px"
      />
      <LaunchIcon
        size={iconSize}
        onDoubleClick={() => startApp(<Todo />, TodoLaunchIcon)}
        iconPath={TodoLaunchIcon}
        iconText="Todo"
        shadow={true}
        padding="15px"
      />
    </IconsContainer>
  );
};

export default DesktopIcons;
