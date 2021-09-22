import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page

  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  // if (!isLoggedIn) return <Redirect to='/auth' />;

  // return <Route {...props} />;
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? children : <Redirect to='/auth' />;
      }}
    />
  );
};

export default PrivateRoute;
