/* React */
import React, { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  const [activeApplications, setActiveApplications] = useState([]);

  const startAnApp = app => {
    if (activeApplications.find(actApp => actApp.type.name === app.type.name)) {
      return alert("This application is already running");
    } /* TODO: It could be a nicer solution if I use a general modal for error messages */
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
