import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const Auth = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Redirect exact from={match.path} to={`${match.path}/login`} />

      <Route path={`${match.path}/login`} component={LoginPage} />
      <Route path={`${match.path}/register`} component={SignupPage} />
    </Switch>
  );
};

export default Auth;
