/* React */
import React, { useContext } from "react";

/* Contexts */
import { ApplicationContext } from "./components/applicationContext";

/* Components */
import DesktopIcons from "./components/desktopIcons";
import TrayBar from "./components/trayAndStartMenu/tray";

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
  const { activeApplications } = useContext(ApplicationContext);

  return (
    <React.Fragment>
      <GlobalStyle />
      <DesktopIcons />
      {/* App rendering */}
      {activeApplications.map((app, index) => (
        <React.Fragment key={index}>{app}</React.Fragment>
      ))}
      <TrayBar />
    </React.Fragment>
  );
}

export default App;

/* TODO: Blur border for windows https://stackoverflow.com/questions/33820493/css-how-to-blur-background-image-within-the-div */
/* TODO: I need to set faIcons to the apps */
/* TODO: Background resolution always adjust to current display resolution */
