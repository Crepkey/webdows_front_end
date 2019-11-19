import React from "react";

const Temperature = props => {
  const setClassName = () => {
    let className;

    if (props.color === "blue") {
      className = "low-temperature";
    } else if (props.color === "red") {
      className = "high-temperature";
    }

    if (props.size === "large") {
      className += " large-font-size";
    }

    return className;
  };

  return (
    <h3 className={setClassName()}>
      {props.value} {props.unit === "C" ? "°C" : "°F"}
    </h3>
  );
};

export default Temperature;
