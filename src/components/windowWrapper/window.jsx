import React, { Component } from "react";
import Draggable from "react-draggable";
import Styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
  font-size: 20px;
  margin: 0px 0px 0px 10px;
  text-shadow: 2px 4px 3px #000000;
`;

const Icon = Styled(FontAwesomeIcon)`
  filter:drop-shadow(3px 2px 1px black);
`;

const Button = Styled.button`
  float: right;
  background-color:#44c767;
  border-radius:5px;
  border:1px solid #18ab29;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:20px;
  padding:3px;
  margin: 0px 0px 8px 8px
  text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
`;

class Window2 extends Component {
  state = {};
  render() {
    return (
      <Draggable handle="strong">
        <Frame>
          <strong>
            <TitleBar>
              <Button>
                <Icon color="white" icon={faWindowMaximize} />
              </Button>
              <Icon color="white" icon={faWindowMinimize} />
              <Icon color="white" icon={faTimes} />
              <TitleBarText>{this.props.appName}</TitleBarText>
            </TitleBar>
          </strong>
          {this.props.children}
        </Frame>
      </Draggable>
    );
  }
}

export default Window2;
