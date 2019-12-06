import React from "react";
import Styled from "styled-components";

const Tray = Styled.div`
  width: 100%;
  height: 43px;
  bottom: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
`;

const RightIcons = Styled.div`
  height: 43px;
  float: right;
`;

const Datetime = Styled.div`
  display: table-cell;
  width: 70px !important;
  cursor: pointer;
  padding-top: 3px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  };
`;

const DatetimeElem = Styled.span`
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 11.3px;
  color: white;
`;

const TrayBar = () => {
  return (
    <Tray>
      <RightIcons>
        <Datetime>
          <DatetimeElem>23:58</DatetimeElem>
          <DatetimeElem>03/05/2018</DatetimeElem>
        </Datetime>
      </RightIcons>
    </Tray>
  );
};

export default TrayBar;
