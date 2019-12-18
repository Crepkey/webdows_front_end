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
/* REFACTOR: Here I need to find a solution which doesn't use an outer div for onClick handling */

const LaunchIcon = props => {
  return (
    <div
      style={{ display: "inline-block" }}
      onClick={() => props.onClick(props.appName)}
    >
      <IconContainer>
        <LauncherIcon
          src={props.iconPath}
          alt="launcher_icon"
          height="75px"
          width="75px"
        />
        <AppName>{props.iconText}</AppName>
      </IconContainer>
    </div>
  );
};

export default LaunchIcon;
