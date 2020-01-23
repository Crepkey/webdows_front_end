/* React */
import React, { createContext, useState } from "react";

/* Util */

import { getAppName, removeApp } from "../util/util";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  const [activeApps, setActiveApps] = useState([]);
  const [minimizedApps, setMinimizedApps] = useState([]);
  const [orderOfApps, setOrderOfApps] = useState({});
  const [clickCounter, setClickCounter] = useState(1);
  const [positionOfApps, setPositionOfApps] = useState({});
  const [elementsOfTrayBar, setElementsOfTrayBar] = useState([]);

  const startApp = (app, icon) => {
    const appName = app.type.name;
    if (isAppRunning(appName)) {
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
    const currentactiveApps = [...activeApps];
    currentactiveApps.push(app);
    setActiveApps(currentactiveApps);
    activateIconOnTrayBar(app, icon);
  };

  const isAppRunning = appName => {
    let result = false;
    if (activeApps.find(actApp => actApp.type.name === appName)) {
      result = true;
    }
    if (minimizedApps.find(minApp => minApp._owner.type.name === appName)) {
      result = true;
    }
    return result;
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
    const currentActiveApps = removeApp(app, activeApps);
    setActiveApps(currentActiveApps.arr);
    deactivateIconOnTrayBar(
      elementsOfTrayBar[currentActiveApps.indexOfRemovedElement]
    );
  };

  const deactivateIconOnTrayBar = icon => {
    const currentelementsOfTrayBar = elementsOfTrayBar.filter(
      actIcon => actIcon !== icon
    );
    setElementsOfTrayBar(currentelementsOfTrayBar);
  };

  /* TODO: It could be a nicer solution if I reset the counter and remove the item from the orderOfApps list */

  const minimizeApp = app => {
    const currentActiveApps = removeApp(app, activeApps);
    setActiveApps(currentActiveApps.arr);
    setMinimizedApps([...minimizedApps, app]);
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
    let index = minimizedApps.findIndex(
      minApp => minApp._owner.type.name === appName
    );
    if (index === -1) {
      setAppOnTheTop(app);
    } else restoreAppSize(app);
  };

  const restoreAppSize = app => {
    const currentMinimizedApps = removeApp(app, minimizedApps);
    setMinimizedApps(currentMinimizedApps.arr);
    setActiveApps([...activeApps, app]);
    setAppOnTheTop(app);
  };

  return (
    <ApplicationContext.Provider
      value={{
        activeApps: activeApps,
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
/* FIXME: You can drag and drop the traybar icons and this is not good */
/* FIXME: If an minimized and you want close another one the closing does'nt work correctly 
because the deactivateTrayBarIcon function get wrong index number */
