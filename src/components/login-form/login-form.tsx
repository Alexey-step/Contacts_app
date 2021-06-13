import React from "react";
import useLoginForm from "../../hooks/use-login-form";
import ErrorMessage from "../error-message/error-message";
import InputField from "../input-field/input-field";

import "./login-form.scss";

interface Props {
  isRegistration: boolean;
}

const LoginForm: React.FC<Props> = ({ isRegistration }) => {
  const { handleSaveBtn, register, errors, handleSubmit } =
    useLoginForm(isRegistration);

  return (
    <form className="login-form" onSubmit={handleSubmit(handleSaveBtn)}>
      <div className="login-form__group">
        <InputField
          className="login-form__field"
          type="email"
          label="Email"
          value="email"
          register={register}
          options={{
            required: "Email is required",
            pattern: {
              value:
                /^[a-z0-9]+[\w.-]+[a-z0-9]@[a-z][a-z0-9-]*[a-z0-9]\.[a-z]{2,4}$/gim,
              message: "Enter a valid email, like mail@mail.ru",
            },
          }}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
      </div>
      <div className="login-form__group">
        <InputField
          className="login-form__field"
          type="password"
          label="Password"
          value="password"
          register={register}
          options={{
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}$/gm,
              message:
                "the string contains at least one uppercase latin letter, one lowercase letter, one special character, one number and min length 6 symbols",
            },
          }}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>
      {isRegistration && (
        <>
          <div className="login-form__group">
            <InputField
              className="login-form__field"
              type="text"
              label="Name"
              value="name"
              register={register}
              options={{
                required: "Name is required",
                maxLength: {
                  value: 15,
                  message: "Max name length is 15",
                },
              }}
            />
            {errors.name && <ErrorMessage message={errors.name.message} />}
          </div>
        </>
      )}
      <button className="login-form__btn" type="submit">
        {isRegistration ? "Register" : "Sign in"}
      </button>
    </form>
  );
};

export default React.memo(LoginForm);
