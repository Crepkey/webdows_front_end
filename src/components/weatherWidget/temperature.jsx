import React from "react";

const temperature = props => {
  return (
    <h3
      className={
        props.color === "blue" ? "low-temperature" : "high-temperature"
      }
    >
      {props.value} {props.unit === "C" ? "°C" : "°F"}
    </h3>
  );
};

export default temperature;
