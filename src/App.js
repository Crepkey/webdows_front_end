/* React */
import React from "react";

/* Components */
import Router from "./components/router";

/* Styles */
import { createGlobalStyle } from "styled-components";
import BackgroundImage from "./img/xp_background.jpg";

const GlobalStyle = createGlobalStyle`
  h3{
    color: white;
  }
  body{
    background: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router />
    </React.Fragment>
  );
}

export default App;

/* TODO: Blur border for windows https://stackoverflow.com/questions/33820493/css-how-to-blur-background-image-within-the-div */
/* TODO: I need to set faIcons to the apps */
/* TODO: Background resolution always adjust to current display resolution */
