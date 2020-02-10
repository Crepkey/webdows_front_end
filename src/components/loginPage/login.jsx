/* React */
import React, { useState } from "react";

/* Comps */
import Input from "../input";

/* Styles */
import Styled from "styled-components";

const Background = Styled.div`
  height: 100vh;
  width: auto;
  margin: 0px;
  padding: 0px;
  opacity: 0.8;
  text-align: center;
  background-color: black;
`;

const PageTitle = Styled.h1`
  color: white;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const LoginForm = Styled.form`
  border: solid 1px white;
  height: 100vh;
`;

const Login = () => {
  const [account, setAccounts] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(account);
  };

  const handleChange = ({ currentTarget: input }) => {
    const currentAccount = { ...account };
    currentAccount[input.name] = input.value;
    setAccounts(currentAccount);
  };

  return (
    <Background>
      <PageTitle>LOGIN</PageTitle>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Username"
          value={account.username}
          onChange={handleChange}
        ></Input>
        <Input
          name="password"
          label="Password"
          type="password"
          value={account.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </LoginForm>
    </Background>
  );
};

export default Login;
