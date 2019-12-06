import React from "react";
import Styled from "styled-components";

const Tray = Styled.div`
  position: fixed;
  bottom: 0;
  height: 43px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const TrayBar = () => {
  return <Tray></Tray>;
};

export default TrayBar;
