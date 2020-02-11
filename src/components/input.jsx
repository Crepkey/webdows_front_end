import React from "react";

const Input = ({ name, label, value, type = "text", error, onChange }) => {
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
        error={error}
        onChange={onChange}
      />
      {error && <span>{error}</span>}
    </React.Fragment>
  );
};

export default Input;
