import React, { createContext } from "react";

/* Applications */
import WeatherWidget from "./weatherWidget/weatherWidget";
import DummyDiv from "./windowWrapper/dummyDiv";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  const applications = [<WeatherWidget />, <DummyDiv />];
  const activeApplications = [];

  return (
    <ApplicationContext.Provider value={[applications, activeApplications]}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
