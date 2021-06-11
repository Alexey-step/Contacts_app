import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../../login-form/login-form";
import withError from "../../../hocs/with-error/with-error";
import { RootState } from "../../../store/reducer";
import { AppRoutes } from "../../../const";

import "./login.scss";

const Login: React.FC = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const { auth } = useSelector((state: RootState) => state);

  if (auth) {
    return <Redirect to={`${AppRoutes.MAIN}`} />;
  }

  return (
    <section className="login">
      <h1 className="login__title">
        {isRegistration ? "Registration" : "Authorization"}
      </h1>
      <LoginForm isRegistration={isRegistration} />
      <div>
        <button
          onClick={() => setIsRegistration(true)}
          className="login__btn"
          type="button"
        >
          Registration
        </button>
        /
        <button
          onClick={() => setIsRegistration(false)}
          className="login__btn"
          type="button"
        >
          Sign in
        </button>
      </div>
    </section>
  );
};

export default withError(React.memo(Login));
