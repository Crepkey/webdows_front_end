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
