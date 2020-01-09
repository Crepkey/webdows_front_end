/* React */
import React from "react";

/* Comps */

/* Styles */
import Styled from "styled-components";

const LauncherIcon = Styled.img`
    display: block;
    padding: 10px 20px 10px 10px;
    height: 50px;
    width: 50px;
    float: left;
`;

const Item = Styled.div`
    margin: 0px 0px 0px 64px;
    font-size: 150%;
    font-family: Raleway;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1) !important
    }
`;

const MenuItem = props => {
  return (
    <Item>
      <LauncherIcon
        src={props.iconPath}
        alt="launcher_icon"
        draggable={false}
      />
      {props.itemName}
    </Item>
  );
};

export default MenuItem;
