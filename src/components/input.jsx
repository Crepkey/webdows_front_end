import React from "react";

/* Styles */
import Styled from "styled-components";

const ErrorText = Styled.span`
  color: white;
`;

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
      {error && <ErrorText>{error}</ErrorText>}
    </React.Fragment>
  );
};

export default Input;
