/* React */
import React from "react";

/* Styles */
import Styled from "styled-components";

const IconContainer = Styled.div`
  position: relative;
  z-index: -5000;
  text-align: center;
  display: inline-block;
  margin: 5px;
`;

const LauncherIcon = Styled.img`
display: block;
  padding: 15px;
  -webkit-filter: drop-shadow(6px 6px 3px rgba(0,0,0,0.5)); filter: drop-shadow(6px 6px 3px rgba(0,0,0,0.5));
`;

const AppName = Styled.span`
  color: white;
  font-family: Raleway;
  font-size: 20px;
  text-shadow: 2px 2px 3px #000000;
`;

const LaunchIcon = props => {
  return (
    <IconContainer>
      <LauncherIcon
        src={props.iconPath}
        alt="launcher_icon"
        height="75px"
        width="75px"
      />
      <AppName>{props.iconText}</AppName>
    </IconContainer>
  );
};

export default LaunchIcon;
