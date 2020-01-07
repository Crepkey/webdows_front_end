/* React */
import React from "react";
import Draggable from "react-draggable";

/* Styles */
import Styled from "styled-components";

const IconContainer = Styled.div`
  position: relative;
  z-index: 0;
  text-align: center;
  display: inline-block;
  margin: 5px;
`;

const LauncherIcon = Styled.img`
display: block;
  padding: ${props => props.padding};
  -webkit-filter: ${props =>
    props.shadow
      ? "drop-shadow(6px 6px 3px rgba(0,0,0,0.5)); filter: drop-shadow(6px 6px 3px rgba(0,0,0,0.5))"
      : ""};
`;

const AppName = Styled.span`
  color: white;
  font-family: Raleway;
  font-size: 20px;
  text-shadow: 2px 2px 3px #000000;
`;

const LaunchIcon = props => {
  return (
    <Draggable grid={[120, 120]}>
      <IconContainer onDoubleClick={props.onClick}>
        <LauncherIcon
          src={props.iconPath}
          alt="launcher_icon"
          height={props.size.height}
          width={props.size.width}
          draggable={false}
          shadow={props.shadow}
          padding={props.padding}
        />
        <AppName>{props.iconText}</AppName>
      </IconContainer>
    </Draggable>
  );
};

export default LaunchIcon;
