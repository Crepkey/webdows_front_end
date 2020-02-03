/* React */
import React from "react";
import { Route } from "react-router-dom";

/* Components */
import Login from "./loginPage/login";

const Router = () => {
  return (
    <React.Fragment>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Login} />
    </React.Fragment>
  );
};

export default Router;
