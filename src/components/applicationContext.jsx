/* React */
import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  /* REFACTOR: Maybe the data consolidation could be better.
  If I use an object in activeApplications list which contains every data about the app*/

  const [activeApplications, setActiveApplications] = useState([]);
  const [orderOfApps, setOrderOfApps] = useState({});
  const [clickCounter, setClickCounter] = useState(1);
  const [positionOfApps, setPositionOfApps] = useState({});
  const [trayBarIcons, setTrayBarIcons] = useState([]);

  const startApp = (app, icon) => {
    const appName = app.type.name;
    if (activeApplications.find(actApp => actApp.type.name === app.type.name)) {
      return alert("This application is already running");
    }
    setAppOnTheTop(app);

    let hasAppPosition;

    for (let app in positionOfApps) {
      if (app === appName) {
        hasAppPosition = true;
      }
    }

    if (!hasAppPosition) {
      setPositionOfApps({ ...positionOfApps, [appName]: { x: 0, y: 0 } });
    }
    /* REFACTOR: I can use the same syntax below as above */
    const currentActiveApplications = [...activeApplications];
    currentActiveApplications.push(app);
    setActiveApplications(currentActiveApplications);
    activateIconOnTrayBar(icon);
  };

  const activateIconOnTrayBar = icon => {
    if (!trayBarIcons.includes(icon)) {
      setTrayBarIcons([...trayBarIcons, icon]);
    }
    console.log(trayBarIcons);
  };

  const closeApp = app => {
    const appName = app._owner.type.name;
    const currentActiveApplications = [...activeApplications];
    const index = currentActiveApplications.findIndex(
      actApp => actApp.type.name === appName
    );
    currentActiveApplications.splice(index, 1);
    setActiveApplications(currentActiveApplications);
  };

  /* TODO: Question from Balázs. Which one is better, 
  if I pass the app object as an argument or I pass only the app's name? 
  If I use only the app name, the checking is not necessary */

  /* TODO: It could be a nicer solution if I reset the counter and remove the item from the orderOfApps list */

  const setAppOnTheTop = app => {
    let appName;

    if (app._owner !== null) {
      appName = app._owner.type.name;
    } else appName = app.type.name;

    const currentOrderOfApps = { ...orderOfApps };
    currentOrderOfApps[appName] = clickCounter;
    setClickCounter(clickCounter + 1);
    setOrderOfApps(currentOrderOfApps);
  };

  const saveAppPosition = (position, app) => {
    let appName; /* TODO: Extract to a method */

    if (app._owner !== null) {
      appName = app._owner.type.name;
    } else appName = app.type.name;

    const currentPositionOfApps = { ...positionOfApps };
    currentPositionOfApps[appName].x = position.x;
    currentPositionOfApps[appName].y = position.y;

    setPositionOfApps(currentPositionOfApps);
  };

  return (
    <ApplicationContext.Provider
      value={{
        activeApplications: activeApplications,
        orderOfApps: orderOfApps,
        positionOfApps: positionOfApps,
        trayBarIcons: trayBarIcons,
        startApp: startApp,
        closeApp: closeApp,
        setAppOnTheTop: setAppOnTheTop,
        saveAppPosition: saveAppPosition
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

/* TODO: It could be a nicer solution if I use a general modal for error messages */
