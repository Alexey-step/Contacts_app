import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login, registration } from "../store/api/api-actions";
import { IUseForm, IForm } from "../types";

const useLoginForm = (isRegistration: boolean): IForm => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignInBtn = (data: IUseForm) => {
    dispatch(login(data));
    reset();
  };

  const handleRegistrationBtn = (data: IUseForm) => {
    dispatch(registration(data));
    reset();
  };

  return {
    register,
    errors,
    handleSubmit: handleSubmit(
      isRegistration ? handleRegistrationBtn : handleSignInBtn
    ),
  };
};

export default useLoginForm;
