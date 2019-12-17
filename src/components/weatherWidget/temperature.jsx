import React from "react";
import Styled from "styled-components";

const HighTemp = Styled.div`
  color: #ed5a54;
  font-weight: bold;
  font-size: 120%;
  margin: 19.2px 0px 19.2px 0px;
`;

const LowTemp = Styled.div`
  color: #3f88c5;
  font-weight: bold;
  font-size: 120%;
  margin: 19.2px 0px 19.2px 0px;
`;

const LargeTemp = Styled.div`
  color: white;
  font-size: 300%;
  font-weight: bold;
  margin: 0px 0px 20px 0px;
`;

const Temperature = props => {
  if (props.color === "blue") {
    return (
      <LowTemp>
        {props.value} {props.unit === "C" ? "°C" : "°F"}
      </LowTemp>
    );
  } else if (props.color === "red") {
    return (
      <HighTemp>
        {props.value} {props.unit === "C" ? "°C" : "°F"}
      </HighTemp>
    );
  }
  if (props.size === "large") {
    return (
      <LargeTemp>
        {props.value} {props.unit === "C" ? "°C" : "°F"}
      </LargeTemp>
    );
  }
};

export default Temperature;

/* TODO: Here I can apply only one styled-components which calculating its own CSS attributes based on
the incoming props
*/
