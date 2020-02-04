import React from "react";

const Input = ({ name, label, value, type = "text", onChange }) => {
  return (
    <React.Fragment>
      <label style={{ color: "white" }} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

export default Input;
