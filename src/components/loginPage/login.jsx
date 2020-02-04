/* React */
import React, { useState } from "react";

/* Styles */
import Styled from "styled-components";

const Background = Styled.div`
  height: 100vh;
  width: auto;
  background-color: black;
  margin: 0px;
  padding: 0px;
  opacity: 0.8;
`;

const PageTitle = Styled.h1`
  color: white;
`;

const LoginForm = Styled.form`
  border: solid 1px white;
  height: 100vh;
`;

const Login = () => {
  const [account, setAccounts] = useState({ username: "", password: "" });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <Background>
      <PageTitle>LOGIN</PageTitle>
      <LoginForm onSubmit={handleSubmit}>
        <label style={{ color: "white" }} htmlFor="Username">
          Username
        </label>
        <input name="username" type="text" />
        <label style={{ color: "white" }} htmlFor="Password">
          Password
        </label>
        <input name="password" type="password" />
        <button type="submit">Login</button>
      </LoginForm>
    </Background>
  );
};

export default Login;
