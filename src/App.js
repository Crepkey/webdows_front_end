import React, { useContext } from "react";
import "./App.css";
import Styled from "styled-components";

/* Contexts */
import { ApplicationContext } from "./components/applicationContext";

/* Components */
import WeatherWidget from "./components/weatherWidget/weatherWidget";
import Window from "./components/windowWrapper/window.jsx";
import DummyDiv from "./components/windowWrapper/dummyDiv";
import TrayBar from "./components/trayAndStartMenu/tray";
import LaunchIcon from "./components/launchIcon";

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
  const [application] = useContext(ApplicationContext);

  return (
    <React.Fragment>
      {application.map(app => (
        <React.Fragment>{app}</React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default App;

/* TODO: Blur border for windows https://stackoverflow.com/questions/33820493/css-how-to-blur-background-image-within-the-div */
