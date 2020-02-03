/* React */
import React, { useContext } from "react";

/* Contexts */
import { ApplicationContext } from "./applicationContext";

/* Components */
import DesktopIcons from "./desktopIcons";
import TrayBar from "./trayAndStartMenu/tray";

const Windows = () => {
  const { activeApps } = useContext(ApplicationContext);

  return (
    <React.Fragment>
      <DesktopIcons />
      {/* App rendering */}
      {activeApps.map((app, index) => (
        <React.Fragment key={index}>{app}</React.Fragment>
      ))}
      <TrayBar />
    </React.Fragment>
  );
};

export default Windows;
