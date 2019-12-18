/* React */
import React, { createContext, useState } from "react";

/* Applications */
import WeatherWidget from "./weatherWidget/weatherWidget";
import DummyDiv from "./windowWrapper/dummyDiv";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
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

  /* REFACTOR: Maybe it could be better if I used the app component instead of the string which is the parameter currently */
  const closeAnApp = appName => {
    const currentActiveApplications = [...activeApplications];
    let index;
    for (let app of currentActiveApplications) {
      if (app.type.name === appName) {
        break;
      } else index++;
    }
    currentActiveApplications.splice(index, 1);
    setActiveApplications(currentActiveApplications);
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications: applications,
        activeApplications: activeApplications,
        startAnApp: startAnApp
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
