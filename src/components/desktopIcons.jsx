/* React */
import React, { useContext } from "react";

/* Contexts */
import { ApplicationContext } from "./applicationContext";

/* Components */
import LaunchIcon from "./launchIcon";
import WeatherWidget from "./weatherWidget/weatherWidget";
import DummyDiv from "./windowWrapper/dummyDiv";
import DummyDiv2 from "./windowWrapper/dummyDiv2";

/* Desktop Icons */
import WeatherLaunchIcon from "../img/desktopIcons/weather-app.png";

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
        iconPath={WeatherLaunchIcon}
        iconText="DummyDiv"
      />

      <LaunchIcon
        onClick={() => startApp(<DummyDiv2 />)}
        iconPath={WeatherLaunchIcon}
        iconText="DummyDiv2"
      />
    </IconsContainer>
  );
};

export default DesktopIcons;
