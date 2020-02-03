/* React */
import React from "react";
import { Route } from "react-router-dom";

/* Components */
import Login from "./loginPage/login";
import Windows from "./windows";

const Router = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Windows} />
    </React.Fragment>
  );
};

export default Router;
