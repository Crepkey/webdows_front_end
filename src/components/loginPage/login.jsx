/* React */
import React from "react";

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
  return (
    <Background>
      <PageTitle>LOGIN</PageTitle>
      <LoginForm>
        <label style={{ color: "white" }} htmlFor="Username">
          Username
        </label>
        <input name="username" type="text" />
        <label style={{ color: "white" }} htmlFor="Password">
          Password
        </label>
        <input name="password" type="password" />
      </LoginForm>
    </Background>
  );
};

export default Login;
