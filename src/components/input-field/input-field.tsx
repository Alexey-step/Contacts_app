import React from "react";
import { RegisterOptions, FieldValues } from "react-hook-form";

interface Props {
  type: string;
  value: string;
  label: string;
  options?: RegisterOptions;
  register: (value: string, options: RegisterOptions) => FieldValues;
  className: string;
  defaultValue?: string | number;
}

const InputField: React.FC<Props> = (props) => {
  const { type, register, className, defaultValue, value, label, options } =
    props;

  return (
    <>
      <label className="visually-hidden" htmlFor={value}>
        {label}
      </label>
      <input
        className={className}
        type={type}
        placeholder={label}
        defaultValue={defaultValue}
        {...register(`${value}`, options)}
      />
    </>
  );
};

export default InputField;
