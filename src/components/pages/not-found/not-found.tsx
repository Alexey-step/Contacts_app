import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../const";

import "./not-found.scss";

const NotFound: React.FC = () => {
  return (
    <main className="not-found">
      <h1 className="not-found__title">404 Not Found</h1>
      <Link className="not-found__link" to={AppRoutes.MAIN}>
        Back to main
      </Link>
    </main>
  );
};

export default NotFound;
