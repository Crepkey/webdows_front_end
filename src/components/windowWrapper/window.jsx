import React, { Component } from "react";
import Draggable from "react-draggable";
import Styled from "styled-components";

const Frame = Styled.div`
  /* Border */

  border: solid;
  border-style: groove;
  border-radius: 15px;
  border: 8px solid rgba(0, 0, 0, .6);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
  
  /* Adjust the size of its content */
  
  display: inline-block;

  /* Shadow */

  -webkit-box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 18px 19px -2px rgba(0, 0, 0, 0.75);
`;

const TitleBar = Styled.div`
height: 40px;
line-height: 40px;
text-align:left;
border-radius:7px 7px 0px 0px
background: rgba(0, 0, 0, .6);;
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=1 );  `;

const TitleBarText = Styled.span`
color: white;
font-size: 20px;
margin: 0px 0px 0px 10px;
text-shadow: 2px 4px 3px #000000;
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
