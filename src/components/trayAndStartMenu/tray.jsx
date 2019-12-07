import React from "react";
import Styled from "styled-components";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

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

const Notifications = Styled.span`
  height: 43px;
  width: 42px;
  position: relative;
  display: table-cell;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  }
`;

const NotificationIcon = Styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 17px;
  color: white;

  &:hover {
    color: #ff6700
  }
`;

const TrayBar = () => {
  return (
    <Tray>
      <RightIcons>
        <Datetime>
          <DatetimeElem>{moment().format("HH:mm")}</DatetimeElem>
          <DatetimeElem>{moment().format("YYYY-MM-DD")}</DatetimeElem>
        </Datetime>
        <Notifications>
          <NotificationIcon icon={faBell} />
        </Notifications>
      </RightIcons>
    </Tray>
  );
};

export default TrayBar;
