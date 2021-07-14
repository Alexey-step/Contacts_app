import React, { useEffect } from "react";
import Cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { setAuthorization } from "../../store/action-creators";
import Main from "../pages/main/main";
import Login from "../pages/login/login";
import NotFound from "../pages/not-found/not-found";
import PrivateRoute from "../private-route/private-route";
import { AppRoutes } from "../../const";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookie.get("user");
    if (token) {
      dispatch(setAuthorization(token));
    }
  }, []);

  return (
    <Switch>
      <PrivateRoute path={`${AppRoutes.MAIN}`} exact render={() => <Main />} />
      <Route path={`${AppRoutes.LOGIN}`} exact>
        <Login />
      </Route>
      <Route path={`${AppRoutes.NOT_FOUND}`}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default App;
