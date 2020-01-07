/* React */
import React, { Component } from "react";
import moment from "moment";

/* Context */

import { ApplicationContext } from "../applicationContext";

/* Comps */

import LaunchIcon from "../launchIcon.jsx";

/* FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

/* Images */
import { ReactComponent as WinLogo } from "../../svg/windows.svg";

/* Styles */
import Styled from "styled-components";

const Tray = Styled.div`
  width: 100%;
  height: 43px;
  position: fixed;
  bottom: 0;
  z-index: 5000000;
  background: rgba(0, 0, 0, 0.6);
`;

const LeftIcons = Styled.div`
  height: 43px;
  display: flex;
  flex-direction: row;
  float: left;
`;

const StartButton = Styled.div`
  height: 43px;
  width: 64px;
  margin: 0px 10px 0px 0px
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  };
`;

const WindowsLogo = Styled.div`
  height: 25px;
  width: 25px;
  `;

const SearchBar = Styled.input`
  color: white;
  height: 33px;
  width: 162px;
  border-radius: 5px;
  border: 1px solid white;
  padding-left: 5px;
  margin: 3px 0px 0px 0px;
  background-color: rgba(255, 255, 255, 0.0);

  &::-webkit-input-placeholder {
    color: white;
  }

  &:hover{
    color: black;
    &::-webkit-input-placeholder {
      color: gray;
    };
    background-color: rgba(255, 255, 255, 1.0)
  }
`;

const ActiveApps = Styled.div`
  height: 43px;
  margin: 0px 20px 0px 20px;
  float: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AppContainer = Styled.div`
  height: 38px;
  margin: 0px 5px 0px 5px;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid #ff6700;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  };
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

const NotificationArea = Styled.span`
  height: 43px;
  width: 43px;
  position: relative;
  display: table-cell;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1) !important
  }import { ApplicationContext } from '../applicationContext';

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

const ShowDesktopButton = Styled.span`
  width: 8px;
  position: relative;
  display: table-cell;
  border-left: 1px solid grey;

  &: hover{
    background-color: rgba(199, 0, 57, 0.8)
  }
`;

export default class TrayBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedExpression: ""
    };
  }

  handleChange = event => {
    this.setState({ searchedExpression: event.target.value });
  };

  render() {
    return (
      <Tray>
        <LeftIcons>
          <StartButton>
            <WindowsLogo>
              <WinLogo />
            </WindowsLogo>
          </StartButton>
          <form
            onSubmit={event => {
              event.preventDefault();
              window.open(
                "https://www.google.com/search?q=" +
                  this.state.searchedExpression,
                "_blank"
              );
            }}
          >
            <SearchBar
              type="text"
              placeholder="Type here to search on Google"
              onChange={this.handleChange}
              value={this.state.searchedExpression}
              name="searchBar"
            />
          </form>
        </LeftIcons>
        <ActiveApps>
          {this.context.trayBarIcons.map((icon, index) => (
            <AppContainer key={index}>
              <LaunchIcon
                iconPath={icon}
                size={{ height: "30px", width: "30px" }}
                padding="5px"
              />
            </AppContainer>
          ))}
        </ActiveApps>
        <RightIcons>
          <Datetime>
            <DatetimeElem>{moment().format("HH:mm")}</DatetimeElem>
            <DatetimeElem>{moment().format("YYYY-MM-DD")}</DatetimeElem>
          </Datetime>
          <NotificationArea>
            <NotificationIcon icon={faBell} />
          </NotificationArea>
          <ShowDesktopButton />
        </RightIcons>
      </Tray>
    );
  }
}

TrayBar.contextType = ApplicationContext;

/* REFACTOR: I must split this class to standalone components */
