import React, { useContext } from "react";
import Window from "./window";
import { ApplicationContext } from "../applicationContext";

const DummyDiv2 = () => {
  const { orderOfApps, setAppOnTheTop } = useContext(ApplicationContext);

  let zIndexNum = orderOfApps.DummyDiv;

  return (
    <Window
      appName="This is a fake application"
      zindex={zIndexNum}
      setAppOnTheTop={setAppOnTheTop}
    >
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
        <span style={{ color: "white", fontSize: "5em" }}>MÁSIK</span>
      </div>
    </Window>
  );
};

export default DummyDiv2;
