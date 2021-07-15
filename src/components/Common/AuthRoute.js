import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = (props) => {
  // Check if user is logged in
  // If yes, redirect to personal page
  // Otherwise, show route

  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (isLoggedIn) return <Redirect to='/account' />;

  return <Route {...props} />;
};

export default AuthRoute;
