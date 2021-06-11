import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login, registration } from "../store/api/api-actions";
import { IUseForm } from "../types";

const useLoginForm = (isRegistration: boolean) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUseForm>();

  const handleSignInBtn = (data: IUseForm) => {
    dispatch(login(data));
    reset();
  };

  const handleRegistrationBtn = (data: IUseForm) => {
    dispatch(registration(data));
    reset();
  };

  return {
    handleSaveBtn: isRegistration ? handleRegistrationBtn : handleSignInBtn,
    register,
    errors,
    handleSubmit,
  };
};

export default useLoginForm;
