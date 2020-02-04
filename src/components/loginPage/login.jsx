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

const Login = () => {
  return (
    <Background>
      <PageTitle>LOGIN</PageTitle>
    </Background>
  );
};

export default Login;
