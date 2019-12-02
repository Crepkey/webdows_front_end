import React from "react";
import ADayOfForecasts from "./aDayOfForecasts";
import Loader from "../../loader";

const WeatherForecasts = props => {
  const loadingAnimStyle = {
    border: "solid",
    borderRadius: "25px",
    borderColor: "#18232e",
    margin: "5px",
    padding: "5px",
    width: "128px",
    height: "323px",
    lineHeight: "441px",
    backgroundColor: "#18232e"
  };

  return (
    <div className="weather-forecasts">
      {(
        props.weatherForecasts.DailyForecasts || [
          ...Array(5).map(x => undefined)
        ]
      ).map(day => (
        <Loader
          type={1}
          data={day}
          name="detailsOfTheDay"
          style={loadingAnimStyle}
        >
          <ADayOfForecasts />
        </Loader>
      ))}
    </div>
  );
};

export default WeatherForecasts;
