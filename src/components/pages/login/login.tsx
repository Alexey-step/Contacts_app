import React from 'react';

import './login.scss';

const Login: React.FC = () => {
  return (
    <section className="login-form">
      <form className="form">
        <label className="form__label" htmlFor="email">Email</label>
        <input className="form__field" type="email" name="email" id="email" required />
        <label className="form__label" htmlFor="password">Password</label>
        <input className="form__field" type="password" name="password" id="password" required />
      </form>
    </section>
  );
};

export default Login;
