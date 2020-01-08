/* React */
import React from "react";

/* Styles */
import Styled, { keyframes } from "styled-components";

const OpenAnimationForControlBar = keyframes`
    0% {
      height: 0px;
      opacity: 0.5;
    }
    100% {
      height: 600px;
      opacity: 0.6;
    } 
`;

const OpenAnimationForMainContainer = keyframes`
    50% {
      width: 0px;
      opacity: 0.5;
    }
    100% {
      width: 400px;
      opacity: 0.6;
    } 
`;

const MainContainer = Styled.div`
  position: absolute;
  left: 0px;
  bottom: 43px;
  height: 600px;
  z-index: 999999;
  cursor: default;
  color: white;
  background: #000000;
  animation-name: ${OpenAnimationForMainContainer}
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;

const ControlBar = Styled.div`
  position: absolute;
  left: 0;
  bottom: 43px;
  z-index: 999999;
  width: 64px;
  color: white;
  background: #000000;
  animation-name: ${OpenAnimationForControlBar}
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const StartMenu = () => {
  return (
    <React.Fragment>
      <ControlBar />
      <MainContainer />
    </React.Fragment>
  );
};

export default StartMenu;
