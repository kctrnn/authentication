import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";

const Personal = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path}>
        <MainPage />
      </Route>

      <Route path={`${match.path}/:username`}>
        <EditPage />
      </Route>
    </Switch>
  );
};

export default Personal;
