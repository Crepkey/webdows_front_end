/* React */
import React, { createContext, useState } from "react";

/* Applications */
import WeatherWidget from "./weatherWidget/weatherWidget";
import DummyDiv from "./windowWrapper/dummyDiv";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  /* TODO: It could be better if I didn't use this list but the launcher comp sends the app's comp to run*/
  const applications = [<WeatherWidget />, <DummyDiv />];
  const [activeApplications, setActiveApplications] = useState([]);

  const startAnApp = appName => {
    /* TODO: I need a check here to avoid the simultaneous running of apps */
    const currentActiveApplications = [...activeApplications];
    for (let app of applications) {
      if (app.type.name === appName) {
        currentActiveApplications.push(app);
        break;
      }
    }
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
        applications: applications,
        activeApplications: activeApplications,
        startAnApp: startAnApp,
        closeAnApp: closeAnApp
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
