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
      {/* FIXME: TrayBar must be on the top before other apps */}
      <TrayBar />
    </React.Fragment>
  );
}

export default App;

/* TODO: Blur border for windows https://stackoverflow.com/questions/33820493/css-how-to-blur-background-image-within-the-div */
