import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page

  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (!isLoggedIn) return <Redirect to='/auth' />;

  return <Route {...props} />;
};

export default PrivateRoute;
