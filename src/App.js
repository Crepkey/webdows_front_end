/* React */
import React, { useContext } from "react";

/* Contexts */
import { ApplicationContext } from "./components/applicationContext";

/* Components */
import LaunchIcon from "./components/launchIcon";
import TrayBar from "./components/trayAndStartMenu/tray";
import WeatherWidget from "./components/weatherWidget/weatherWidget";

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
  const { activeApplications, startAnApp } = useContext(ApplicationContext);

  return (
    <React.Fragment>
      <GlobalStyle />
      <LaunchIcon
        onClick={() => startAnApp(<WeatherWidget />)}
        iconPath={WeatherLaunchIcon}
        iconText="Weather"
      />
      {/* App rendering */}
      {activeApplications.map((app, index) => (
        <React.Fragment key={index}>{app}</React.Fragment>
      ))}

      <TrayBar />
    </React.Fragment>
  );
}

export default App;

/* FIXME: There is a bug with LaunchIcon components when the first page loading is starting */
/* TODO: Blur border for windows https://stackoverflow.com/questions/33820493/css-how-to-blur-background-image-within-the-div */
