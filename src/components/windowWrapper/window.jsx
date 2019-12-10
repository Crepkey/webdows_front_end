import React, { Component } from "react";
import Draggable from "react-draggable";
import Styled from "styled-components";

import HandlerButton from "./handlerButton";

/* TODO:  Here need to set the opacity of the border to be compatible with all the browsers*/

const Frame = Styled.div`
  padding: 8px;
  display: inline-block;
  
  /* Border */
  border-radius: 15px;
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
  background: rgba(0, 0, 0, .6);

  /* Shadow */
  -webkit-box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
`;

const TitleBar = Styled.div`
  height: 40px;
  line-height: 40px;
  text-align:left;
  border-radius:7px 7px 0px 0px;
`;

const TitleBarText = Styled.span`
  color: white;
  font-family: Raleway;
  font-size: 20px;
  text-shadow: 2px 4px 3px #000000;
`;

const HandlerButtonsContainer = Styled.div`
  margin: 0px 5px 0px 0px;
`;
class Window extends Component {
  state = {};
  render() {
    return (
      <Draggable handle="strong">
        <Frame>
          <strong>
            <TitleBar>
              <HandlerButtonsContainer>
                <HandlerButton color="rgba(199, 0, 57);" type="closing" />
                <HandlerButton color="rgba(68, 199, 103);" type="maximizing" />
                <HandlerButton color="rgba(247, 190, 0);" type="minimizing" />
              </HandlerButtonsContainer>
              <TitleBarText>
                {this.props.appIcon}
                {this.props.appName}
              </TitleBarText>
            </TitleBar>
          </strong>
          {this.props.children}
        </Frame>
      </Draggable>
    );
  }
}

export default Window;