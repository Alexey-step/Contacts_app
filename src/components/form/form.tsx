import React from "react";
import { Contact } from "../../types";
import useContactForm from "../../hooks/use-contact-form";
import { Status } from "../../const";
import ErrorMessage from "../error-message/error-message";
import InputField from "../input-field/input-field";

import "./form.scss";

interface Props {
  contact?: Contact;
  onSave?: (isSave: boolean) => void;
  isEdit?: boolean;
  onOpen?: (isOpen: boolean) => void;
}

const Form: React.FC<Props> = ({ contact, onSave, isEdit, onOpen }) => {
  const { register, handleSubmit, handleDelete, errors, status } =
    useContactForm({ contact, onSave });

  return (
    <form className="form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="form__item">
        <InputField
          className="form__field"
          type="text"
          label="Name"
          value="name"
          defaultValue={contact ? contact.name : ""}
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
      <div className="form__item">
        <InputField
          className="form__field"
          type="text"
          label="Address"
          value="address"
          defaultValue={contact ? contact.address : ""}
          register={register}
          options={{
            maxLength: {
              value: 15,
              message: "Max address length is 15",
            },
          }}
        />
        {errors.address && <ErrorMessage message={errors.address.message} />}
      </div>
      <div className="form__item">
        <InputField
          className="form__field"
          type="email"
          label="Email"
          value="email"
          defaultValue={contact ? contact.email : ""}
          register={register}
          options={{
            pattern: {
              value:
                /^[a-z0-9]+[\w.-]+[a-z0-9]@[a-z][a-z0-9-]*[a-z0-9]\.[a-z]{2,}$/gim,
              message: "Enter a valid email, like mail@mail.ru",
            },
          }}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
      </div>
      <div className="form__item">
        <InputField
          className="form__field"
          type="tel"
          label="Phone"
          value="phone"
          defaultValue={contact ? contact.phone : ""}
          register={register}
          options={{
            required: "Phone is required",
            pattern: {
              value: /^((\+7)[- ]?)?\(?\d{3}\)?([-]?\d{1}){7}$/gim,
              message: "Enter a valid phone number, like +7(909)11-111-11",
            },
          }}
        />
        {errors.phone && <ErrorMessage message={errors.phone.message} />}
      </div>
      <button className="form__btn" type="submit">
        {status === Status.LOAD ? "Saving..." : "Save contact"}
      </button>
      {isEdit ? (
        <button onClick={handleDelete} className="form__btn" type="button">
          {status === Status.LOAD ? "Deleting..." : "Delete"}
        </button>
      ) : (
        <button
          onClick={() => onOpen(false)}
          className="form__btn"
          type="button"
        >
          Close
        </button>
      )}
    </form>
  );
};

export default React.memo(Form);
