import PrivateRoute from "components/Common/PrivateRoute";
import NotFound from "components/NotFound";
import Auth from "features/Auth";
import Personal from "features/Personal";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Redirect exact from='/' to='/auth' />

        <Route path='/auth' component={Auth} />

        <PrivateRoute path='/account'>
          <Route path='/account' component={Personal} />
        </PrivateRoute>

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
