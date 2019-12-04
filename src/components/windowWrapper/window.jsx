import React, { Component } from "react";
import Draggable from "react-draggable";

class Window extends Component {
  state = {};
  render() {
    return (
      <Draggable handle="strong">
        <div
          style={{
            border: "solid",
            borderColor: "orange",
            display: "inline-block"
          }}
        >
          <strong>
            <div
              style={{
                border: "solid",
                borderColor: "orange",
                background: "orange"
              }}
            >
              Title bar
            </div>
          </strong>
          {this.props.children}
        </div>
      </Draggable>
    );
  }
}

export default Window;
