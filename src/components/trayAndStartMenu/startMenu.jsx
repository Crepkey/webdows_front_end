/* React */
import React from "react";

/* Styles */
import Styled from "styled-components";

const MainContainer = Styled.div`
    background: #005a9e;
    position: absolute;
    left: 0;
    bottom: 43px;
    height: 600px;
    color: white;
    visibility: hidden;
    display: grid;
    grid-template-columns: 50px 250px 400px;
    cursor: default;
`;

const StartMenu = () => {
  return <MainContainer>TESZT</MainContainer>;
};

export default StartMenu;
