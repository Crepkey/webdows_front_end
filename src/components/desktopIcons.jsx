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

  return (
    <IconsContainer>
      <LaunchIcon
        onClick={() => startApp(<WeatherWidget />)}
        iconPath={WeatherLaunchIcon}
        iconText="Weather"
      />

      <LaunchIcon
        onClick={() => startApp(<DummyDiv />)}
        iconPath={DummyLaunchIcon}
        iconText="DummyDiv"
      />

      <LaunchIcon
        onClick={() => startApp(<DummyDiv2 />)}
        iconPath={DummyLaunchIcon}
        iconText="DummyDiv2"
      />

      <LaunchIcon
        onClick={() => startApp(<Calculator />)}
        iconPath={CalculatorLaunchIcon}
        iconText="Calculator"
      />
      <LaunchIcon
        onClick={() => startApp(<Todo />)}
        iconPath={TodoLaunchIcon}
        iconText="Todo"
      />
    </IconsContainer>
  );
};

export default DesktopIcons;
