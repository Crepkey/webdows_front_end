import React from "react";
import { ReactComponent as Loader1 } from "../svg/loader_1.svg";
import { ReactComponent as Loader2 } from "../svg/loader_2.svg";

const Loader = props => {
  if (props.data === undefined) {
    if (props.type === 1) {
      return (
        <div style={{ height: props.height, width: props.width }}>
          <Loader1 />
        </div>
      );
    }
    if (props.type === 2) {
      return (
        <div style={{ height: props.height, width: props.width }}>
          <Loader2 />
        </div>
      );
    }
  }
  return React.cloneElement(props.children, { [props.name]: props.data });
};

export default Loader;
