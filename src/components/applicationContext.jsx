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
    const currentActiveApplications = [...activeApplications];
    for (let app of applications) {
      if (app.type.name === appName) {
        currentActiveApplications.push(app);
        break;
      }
    }
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
