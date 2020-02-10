/* React */
import React from "react";
import { Route } from "react-router-dom";

/* Components */
import LoginPage from "./loginPage/loginPage";
import Windows from "./windows";

const Router = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={Windows} />
    </React.Fragment>
  );
};

export default Router;
