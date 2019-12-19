import React, { useContext } from "react";
import Window from "./window";

const DummyDiv = () => {
  return (
    <Window appName="This is a fake application" zindex={2}>
      <div
        style={{
          border: "solid",
          borderColor: "white",
          width: "600px",
          height: "500px",
          textAlign: "center",
          lineHeight: "500px"
        }}
      >
        <span style={{ color: "white", fontSize: "5em" }}>Valami</span>
      </div>
    </Window>
  );
};

export default DummyDiv;
