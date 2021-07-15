import AuthRoute from "components/Common/AuthRoute";
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

        <AuthRoute path='/auth'>
          <Auth />
        </AuthRoute>

        <PrivateRoute path='/account'>
          <Personal />
        </PrivateRoute>

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
