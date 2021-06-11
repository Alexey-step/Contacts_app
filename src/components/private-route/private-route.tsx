import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../UI/spinner/spinner";
import { RootState } from "../../store/reducer";
import { Status, AppRoutes } from "../../const";

interface Props {
  render: (props: React.ReactNode) => React.ReactNode;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<Props> = ({ render, path, exact }) => {
  const { auth, status } = useSelector((state: RootState) => state);

  if (status === Status.LOAD) {
    return <Spinner />;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps: React.ReactNode) => {
        return auth ? (
          render(routeProps)
        ) : (
          <Redirect to={`${AppRoutes.LOGIN}`} />
        );
      }}
    />
  );
};

export default PrivateRoute;
