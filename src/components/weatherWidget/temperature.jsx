import React from "react";

const temperature = props => {
  return (
    <h3
      className={
        props.color === "blue" ? "low-temperature" : "high-temperature"
      }
    >
      Valami
    </h3>
  );
};

export default temperature;
