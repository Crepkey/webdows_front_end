import React, { useState, createContext } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = props => {
  const [applications, setApplications] = useState(["widget", "calc", "to-do"]);

  return (
    <ApplicationContext.Provider value={[applications, setApplications]}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
