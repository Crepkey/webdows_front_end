import React from "react";
import Window from "./window";
import Styled from "styled-components";

const Container = Styled.div`
  position: relative;
  z-index: 1;
`;

const DummyDiv = () => {
  return (
    <Window appName="This is a fake application">
      <Container
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
      </Container>
    </Window>
  );
};

export default DummyDiv;
