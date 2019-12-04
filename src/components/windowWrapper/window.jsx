import React, { Component } from "react";
import Draggable from "react-draggable";

class Window extends Component {
  state = {};
  render() {
    return (
      <Draggable>
        <div>{this.props.children}</div>
      </Draggable>
    );
  }
}

export default Window;
