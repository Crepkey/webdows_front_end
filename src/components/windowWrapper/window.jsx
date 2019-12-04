import React, { Component } from "react";
import Draggable from "react-draggable";
import Styled from "styled-components";

const Frame = Styled.div`
  border: solid;
  border-style: groove;
  border-radius: 15px;
  border: 5px solid rgba(0, 0, 0, .5);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
  display: inline-block;
`;

const TitleBar = Styled.div`
text-align:left;
line-height: 40px;
height: 40px;
background: rgba(76,76,76,1);
background: -moz-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(89,89,89,0.95) 12%, rgba(102,102,102,0.9) 25%, rgba(71,71,71,0.87) 32%, rgba(44,44,44,0.83) 42%, rgba(0,0,0,0.8) 51%, rgba(17,17,17,0.76) 60%, rgba(0,0,0,0.63) 92%, rgba(19,19,19,0.6) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(76,76,76,1)), color-stop(12%, rgba(89,89,89,0.95)), color-stop(25%, rgba(102,102,102,0.9)), color-stop(32%, rgba(71,71,71,0.87)), color-stop(42%, rgba(44,44,44,0.83)), color-stop(51%, rgba(0,0,0,0.8)), color-stop(60%, rgba(17,17,17,0.76)), color-stop(92%, rgba(0,0,0,0.63)), color-stop(100%, rgba(19,19,19,0.6)));
background: -webkit-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(89,89,89,0.95) 12%, rgba(102,102,102,0.9) 25%, rgba(71,71,71,0.87) 32%, rgba(44,44,44,0.83) 42%, rgba(0,0,0,0.8) 51%, rgba(17,17,17,0.76) 60%, rgba(0,0,0,0.63) 92%, rgba(19,19,19,0.6) 100%);
background: -o-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(89,89,89,0.95) 12%, rgba(102,102,102,0.9) 25%, rgba(71,71,71,0.87) 32%, rgba(44,44,44,0.83) 42%, rgba(0,0,0,0.8) 51%, rgba(17,17,17,0.76) 60%, rgba(0,0,0,0.63) 92%, rgba(19,19,19,0.6) 100%);
background: -ms-linear-gradient(top, rgba(76,76,76,1) 0%, rgba(89,89,89,0.95) 12%, rgba(102,102,102,0.9) 25%, rgba(71,71,71,0.87) 32%, rgba(44,44,44,0.83) 42%, rgba(0,0,0,0.8) 51%, rgba(17,17,17,0.76) 60%, rgba(0,0,0,0.63) 92%, rgba(19,19,19,0.6) 100%);
background: linear-gradient(to bottom, rgba(76,76,76,1) 0%, rgba(89,89,89,0.95) 12%, rgba(102,102,102,0.9) 25%, rgba(71,71,71,0.87) 32%, rgba(44,44,44,0.83) 42%, rgba(0,0,0,0.8) 51%, rgba(17,17,17,0.76) 60%, rgba(0,0,0,0.63) 92%, rgba(19,19,19,0.6) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
  `;

const TitleBarText = Styled.span`
color: white;
font-size: 20px;
text-shadow: 2px 4px 3px #000000;
margin: 0px 0px 0px 10px;
`;
class Window extends Component {
  state = {};
  render() {
    return (
      <Draggable handle="strong">
        <Frame>
          <strong>
            <TitleBar>
              <TitleBarText>{this.props.appName}</TitleBarText>
            </TitleBar>
          </strong>
          {this.props.children}
        </Frame>
      </Draggable>
    );
  }
}

export default Window;
