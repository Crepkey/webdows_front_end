import React from "react";
import "./App.css";
import Styled from "styled-components";

/* Components */
import WeatherWidget from "./components/weatherWidget/weatherWidget";
import Window from "./components/windowWrapper/window.jsx";
import DummyDiv from "./components/windowWrapper/dummyDiv";
import TrayBar from "./components/trayAndStartMenu/tray";
import LaunchIcon from "./components/LaunchIcon";

/* Desktop Icons */

import WeatherLaunchIcon from "./img/desktopIcons/weather-app.png";

/* FontAwesome stuffs */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

const AppIcon = Styled(FontAwesomeIcon)`
  color: white;
  font-size: 18px;
  margin: 0px 10px 0px 5px;
  filter:drop-shadow(2px 4px 3px #000000)`;

function App() {
  return (
    <React.Fragment>
      <LaunchIcon iconAddress={WeatherLaunchIcon} iconText="Weather" />
      <Window
        appName="Wheather Widget"
        appIcon={<AppIcon color="white" icon={faUmbrella} />}
      >
        <WeatherWidget />
      </Window>
      <TrayBar />
    </React.Fragment>
  );
}

export default App;

/* FIXME: Context API is totally useless here. If I understand it I must remove from the project */
/* TODO: Blur border for windows https://stackoverflow.com/questions/33820493/css-how-to-blur-background-image-within-the-div */
/* FIXME: Wheather widget's will be deacreased when It is waiting for the data */
