/* React */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

/* Components */
import App from "./App";

/* Contexts */
import { ApplicationProvider } from "./components/applicationContext";

/* Style */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <ApplicationProvider>
      <GlobalStyle />
      <App />
    </ApplicationProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
