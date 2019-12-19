/* React */
import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  const [activeApplications, setActiveApplications] = useState([]);
  const orderOfApps = {}; /* This obj is stores the order of applications in the app's layer hierarchy */

  const startAnApp = app => {
    if (activeApplications.find(actApp => actApp.type.name === app.type.name)) {
      return alert("This application is already running");
    }

    setAppOnTheTop(app.type.name);

    const currentActiveApplications = [...activeApplications];
    currentActiveApplications.push(app);
    setActiveApplications(currentActiveApplications);
  };

  const closeAnApp = app => {
    const currentActiveApplications = [...activeApplications];
    const index = currentActiveApplications.indexOf(app);
    currentActiveApplications.splice(index, 1);
    setActiveApplications(currentActiveApplications);
  };

  const setAppOnTheTop = appName => {
    if (Object.keys(orderOfApps).length === 0) {
      orderOfApps[appName] = 1;
      return;
    }
    for (let key in orderOfApps) {
      orderOfApps[key] = 0;
    }
    orderOfApps[appName] = 1;
  };

  return (
    <ApplicationContext.Provider
      value={{
        activeApplications: activeApplications,
        startAnApp: startAnApp,
        closeAnApp: closeAnApp
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};

/* TODO: It could be a nicer solution if I use a general modal for error messages */
