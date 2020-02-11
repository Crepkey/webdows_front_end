import React, { useState } from "react";

/* Comps */
import Input from "../input";

/* Styles */
import Styled from "styled-components";

const Form = Styled.form`
  border: solid 1px white;
  height: 100vh;
  width: 50%;
`;

const LoginForm = props => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const validation = () => {
    const errors = {};
    if (account.username.trim() === "") {
      errors.username = "The username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "The password is required";
    }
    console.log("errors length: " + Object.keys(errors).length);
    return Object.keys(errors).length !== 0 ? errors : null;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = validation();
    setErrors(errors || {});
    if (errors) return;

    console.log("submitted");
  };

  const handleChange = ({ currentTarget: input }) => {
    const currentAccount = { ...account };
    currentAccount[input.name] = input.value;
    setAccount(currentAccount);
  };

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>Login Form</h1>
        <Input
          id="username"
          name="username"
          htmlFor="username"
          label="Username"
          error={errors.username}
          value={account.username}
          onChange={handleChange}
        ></Input>
        <Input
          id="password"
          name="password"
          htmlFor="username"
          label="Password"
          type="password"
          error={errors.password}
          value={account.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </Form>
    </React.Fragment>
  );
};

export default LoginForm;
