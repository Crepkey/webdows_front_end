import React from "react";
import "./App.css";

import WeatherWidget from "./components/weatherWidget/weatherWidget";
import Window from "./components/windowWrapper/window.jsx";
import DummyDiv from "./components/windowWrapper/dummyDiv";

function App() {
  return (
    <React.Fragment>
      <Window>
        <DummyDiv />
      </Window>
      <WeatherWidget />
    </React.Fragment>
  );
}

export default App;
