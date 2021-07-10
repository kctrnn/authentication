import NotFound from "components/NotFound";
import Auth from "features/Auth";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Redirect exact from='/' to='/auth' />

        <Route path='/auth' component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
