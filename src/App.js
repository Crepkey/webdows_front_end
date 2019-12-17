/* React */
import React, { useContext } from "react";

/* Contexts */
import { ApplicationContext } from "./components/applicationContext";

/* Components */
import LaunchIcon from "./components/launchIcon";
import TrayBar from "./components/trayAndStartMenu/tray";

/* Desktop Icons */
import WeatherLaunchIcon from "./img/desktopIcons/weather-app.png";

/* Styles */
import { createGlobalStyle } from "styled-components";
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
  return (
    <React.Fragment>
      <GlobalStyle />
            
      {/* FIXME: There is a bug with components when the first page loading is starting */}
      <LaunchIcon iconPath={WeatherLaunchIcon} iconText="Weather" />
      {application.map(app => (
        <React.Fragment>{app}</React.Fragment>
      ))}
      <TrayBar />
    </React.Fragment>
  );
}

export default App;

/* TODO: Blur border for windows https://stackoverflow.com/questions/33820493/css-how-to-blur-background-image-within-the-div */
