/* React */
import React, { useContext } from "react";

/* Contexts */
import { ApplicationContext } from "./components/applicationContext";

/* Components */
import LaunchIcon from "./components/launchIcon";
import TrayBar from "./components/trayAndStartMenu/tray";
import WeatherWidget from "./components/weatherWidget/weatherWidget";
import DummyDiv from "./components/windowWrapper/dummyDiv";
import DummyDiv2 from "./components/windowWrapper/dummyDiv2";

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
  const { activeApplications, startApp } = useContext(ApplicationContext);

  return (
    <React.Fragment>
      <GlobalStyle />
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
