import React from "react";
import "./App.css";

import WeatherWidget from "./components/weatherWidget/weatherWidget";
import Window from "./components/windowWrapper/window.jsx";
import DummyDiv from "./components/windowWrapper/dummyDiv";

function App() {
  return (
    <React.Fragment>
      <Window appName="Dummy Application">
        <WeatherWidget />
      </Window>
    </React.Fragment>
  );
}

export default App;
