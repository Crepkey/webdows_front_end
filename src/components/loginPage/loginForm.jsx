import React from "react";

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
  return (
    <React.Fragment>
      <Form>
        <h1 style={{ color: "white" }}>Login Form</h1>
        <Input
          id="username"
          name="username"
          htmlFor="username"
          label="Username"
        ></Input>
        <Input
          id="password"
          name="password"
          htmlFor="username"
          label="Password"
          type="password"
        />
        <button type="submit">Login</button>
      </Form>
    </React.Fragment>
  );
};

export default LoginForm;
