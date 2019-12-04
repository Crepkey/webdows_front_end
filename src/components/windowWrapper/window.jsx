import React, { Component } from "react";
import Draggable from "react-draggable";
import Styled from "styled-components";

const Frame = Styled.div`
  border: solid;
  border-color: orange;
  display: inline-block;
`;

const TitleBar = Styled.div`
  border: solid;
  border-color: orange;
  background: orange;
  `;

class Window extends Component {
  state = {};
  render() {
    return (
      <Draggable handle="strong">
        <Frame>
          <strong>
            <TitleBar>Title bar</TitleBar>
          </strong>
          {this.props.children}
        </Frame>
      </Draggable>
    );
  }
}

export default Window;
