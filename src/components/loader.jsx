import React from "react";
import { ReactComponent as Loader1 } from "../svg/loader_1.svg";
import { ReactComponent as Loader2 } from "../svg/loader_2.svg";

const Loader = props => {
  const { data, type, style, name, children } = props;

  if (data === undefined) {
    switch (type) {
      case 1:
        return (
          <div style={style}>
            <Loader1 />
          </div>
        );
      case 2:
        return (
          <div style={style}>
            <Loader2 />
          </div>
        );
      default:
        return (
          <div style={style}>
            <Loader1 />
          </div>
        );
    }
  }

  return React.cloneElement(children, { [name]: data });
};

export default Loader;
