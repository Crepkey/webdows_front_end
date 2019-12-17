import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";

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

/* Styles */

import BackgroundImage from "./img/xp_background.jpg";

const GlobalStyle = createGlobalStyle`
  h3{
    color: white;
  }
  body{
    background: url(${BackgroundImage}) no-repeat;
  }
`;

function App() {
  const [application] = useContext(ApplicationContext);

  console.log(BackgroundImage);
  return (
    <React.Fragment>
      <GlobalStyle />
      {application.map(app => (
        <React.Fragment>{app}</React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default App;

/* TODO: Blur border for windows https://stackoverflow.com/questions/33820493/css-how-to-blur-background-image-within-the-div */
