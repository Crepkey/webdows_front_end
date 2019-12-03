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
      className = "large-temperature";
    }
    return className;
  };

  return (
    <div className={setClassName()}>
      {props.value} {props.unit === "C" ? "°C" : "°F"}
    </div>
  );
};

export default Temperature;
