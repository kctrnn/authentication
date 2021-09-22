import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useHistory } from "react-router-dom";

const Auth = () => {
  let match = useRouteMatch();
  const history = useHistory();
  
  // redirect to personal page if is logged in
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (isLoggedIn) {
    history.push("/account");
  }

  return (
    <Switch>
      <Redirect exact from={match.path} to={`${match.path}/login`} />

      <Route path={`${match.path}/login`} component={LoginPage} />
      <Route path={`${match.path}/register`} component={SignupPage} />
    </Switch>
  );
};

export default Auth;
