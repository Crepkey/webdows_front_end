import React from "react";
import CurrentWeatherDetails from "./currentDetails";
import CurrentWeatherMain from "./currentMain";
import Loader from "../../loader";

const CurrentWeather = props => {
  const loadingAnimStyle = {
    border: "solid",
    borderRadius: "25px",
    borderColor: "#18232e",
    margin: "5px",
    padding: "5px",
    width: "256px",
    height: "341px",
    backgroundColor: "#18232e"
  };

  return Object.keys(props.currentWeather).length === 0 ? (
    <Loader type={2} style={loadingAnimStyle} />
  ) : (
    <div className="current-weather">
      <h3 className="large-text">Current Conditions</h3>
      <div className="current-weather-container">
        <CurrentWeatherMain
          weatherIconType={props.currentWeather.WeatherIcon}
          weatherText={props.currentWeather.WeatherText}
        />
        <CurrentWeatherDetails currentWeather={props.currentWeather} />
      </div>
    </div>
  );
};

export default CurrentWeather;
