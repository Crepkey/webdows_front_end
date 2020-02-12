import React, { useState } from "react";
import Joi from "joi-browser";

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

  const schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  const validation = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(account, schema, option);
    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const inputObj = { [name]: value };
    const fieldSchema = { [name]: schema[name] };
    const { error } = Joi.validate(inputObj, fieldSchema);
    return error ? error.details[0].message : null;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = validation();
    setErrors(errors || {});
    if (errors) return;

    console.log("submitted");
  };

  const handleChange = ({ currentTarget: input }) => {
    const currentErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) currentErrors[input.name] = errorMessage;
    else delete currentErrors[input.name];
    setErrors(currentErrors);

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
