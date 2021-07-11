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
        <Route path='/account' component={Personal} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
