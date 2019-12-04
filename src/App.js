import React from "react";
import "./App.css";

import WeatherWidget from "./components/weatherWidget/weatherWidget";
import Window from "./components/windowWrapper/window.jsx";

function App() {
  return (
    <React.Fragment>
      <Window />
      <WeatherWidget />
    </React.Fragment>
  );
}

export default App;
