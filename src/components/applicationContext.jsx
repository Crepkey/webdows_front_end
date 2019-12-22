/* React */
import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  const [activeApplications, setActiveApplications] = useState([]);
  const [orderOfApps, setOrderOfApps] = useState({});

  const startAnApp = app => {
    if (activeApplications.find(actApp => actApp.type.name === app.type.name)) {
      return alert("This application is already running");
    }
    setAppOnTheTop(app);
    const currentActiveApplications = [...activeApplications];
    currentActiveApplications.push(app);
    setActiveApplications(currentActiveApplications);
  };

  const closeAnApp = app => {
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

  const setAppOnTheTop = app => {
    let appName;
    if (app._owner !== null) {
      appName = app._owner.type.name;
    } else appName = app.type.name;

    if (Object.keys(orderOfApps).length === 0) {
      setOrderOfApps({ [appName]: 1 });
      return;
    }

    let prevOrderOfApps = { ...orderOfApps };
    for (let key in prevOrderOfApps) {
      prevOrderOfApps[key] = 0;
    }
    prevOrderOfApps[appName] = 1;
    setOrderOfApps(prevOrderOfApps);
  };

  return (
    <ApplicationContext.Provider
      value={{
        activeApplications: activeApplications,
        orderOfApps: orderOfApps,
        startAnApp: startAnApp,
        closeAnApp: closeAnApp,
        setAppOnTheTop: setAppOnTheTop
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

/* TODO: It could be a nicer solution if I use a general modal for error messages */
