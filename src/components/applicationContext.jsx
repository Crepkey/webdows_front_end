/* React */
import React, { createContext, useState } from "react";

/* Applications */
import WeatherWidget from "./weatherWidget/weatherWidget";
import DummyDiv from "./windowWrapper/dummyDiv";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  const [activeApplications, setActiveApplications] = useState([]);

  const startAnApp = app => {
    /* TODO: I need a check here to avoid the simultaneous running of apps */
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
