/* React */
import React from "react";

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

const Login = () => {
  return (
    <Background>
      <PageTitle>LOGIN</PageTitle>
    </Background>
  );
};

export default Login;
