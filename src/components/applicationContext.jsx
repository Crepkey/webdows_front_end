/* React */
import React, { createContext, useState } from "react";

/* Util */

import { getAppName } from "../util/util";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  const [activeApplications, setActiveApplications] = useState([]);
  const [minimizedApplications, setMinimizedApplications] = useState([]);
  const [orderOfApps, setOrderOfApps] = useState({});
  const [clickCounter, setClickCounter] = useState(1);
  const [positionOfApps, setPositionOfApps] = useState({});
  const [elementsOfTrayBar, setElementsOfTrayBar] = useState([]);

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
    const currentActiveApplications = [...activeApplications];
    currentActiveApplications.push(app);
    setActiveApplications(currentActiveApplications);
    activateIconOnTrayBar(app, icon);
  };

  const activateIconOnTrayBar = (app, icon) => {
    const isIconOnTheTrayBar = function() {
      for (let app of elementsOfTrayBar) {
        let appIcon = Object.keys(app)[0];
        if (appIcon === icon) {
          return true;
        }
      }
      return false;
    };

    if (!isIconOnTheTrayBar()) {
      setElementsOfTrayBar([...elementsOfTrayBar, { icon: icon, app: app }]);
    }
  };

  const closeApp = app => {
    const appName = app._owner.type.name;
    const currentActiveApplications = [...activeApplications];
    const index = currentActiveApplications.findIndex(
      actApp => actApp.type.name === appName
    );
    currentActiveApplications.splice(index, 1);
    setActiveApplications(currentActiveApplications);
    deactivateIconOnTrayBar(elementsOfTrayBar[index]);
  };

  const deactivateIconOnTrayBar = icon => {
    const currentelementsOfTrayBar = elementsOfTrayBar.filter(
      actIcon => actIcon !== icon
    );
    setElementsOfTrayBar(currentelementsOfTrayBar);
  };

  /* TODO: It could be a nicer solution if I reset the counter and remove the item from the orderOfApps list */

  const minimizeApp = app => {
    const appName = app._owner.type.name;
    const currentActiveApplications = [...activeApplications];
    const index = currentActiveApplications.findIndex(
      actApp => actApp.type.name === appName
    );
    currentActiveApplications.splice(index, 1);
    setActiveApplications(currentActiveApplications);
    setMinimizedApplications([...minimizedApplications, app]);
  };

  const setAppOnTheTop = app => {
    let appName = getAppName(app);
    const currentOrderOfApps = { ...orderOfApps };
    currentOrderOfApps[appName] = clickCounter;
    setClickCounter(clickCounter + 1);
    setOrderOfApps(currentOrderOfApps);
  };

  const saveAppPosition = (position, app) => {
    let appName = getAppName(app);
    const currentPositionOfApps = { ...positionOfApps };
    currentPositionOfApps[appName].x = position.x;
    currentPositionOfApps[appName].y = position.y;
    setPositionOfApps(currentPositionOfApps);
  };

  const handleAppFromTrayBar = app => {
    let appName = getAppName(app);
    let index = minimizedApplications.findIndex(
      minApp => minApp._owner.type.name === appName
    );
    if (index === -1) {
      setAppOnTheTop(app);
    } else restoreAppSize(app);
  };

  const restoreAppSize = app => {
    let appName = getAppName(app);
    const currentMinimizedApplications = [...minimizedApplications];
    let index = currentMinimizedApplications.findIndex(
      minApp => minApp._owner.type.name === appName
    );
    currentMinimizedApplications.splice(index, 1);
    setMinimizedApplications(currentMinimizedApplications);
    setActiveApplications([...activeApplications, app]);
    setAppOnTheTop(app);
  };

  return (
    <ApplicationContext.Provider
      value={{
        activeApplications: activeApplications,
        orderOfApps: orderOfApps,
        positionOfApps: positionOfApps,
        elementsOfTrayBar: elementsOfTrayBar,
        startApp: startApp,
        minimizeApp: minimizeApp,
        closeApp: closeApp,
        setAppOnTheTop: setAppOnTheTop,
        saveAppPosition: saveAppPosition,
        handleAppFromTrayBar: handleAppFromTrayBar
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

/* TODO: It could be a nicer solution if I use a general modal for error messages */
