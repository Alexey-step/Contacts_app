import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  setContact,
  updateContact,
  deleteContact,
} from "../store/api/api-actions";
import { Contact } from "../types";
import { RootState } from "../store/reducer";

interface Props {
  contact?: Contact;
  onSave?: (isSave: boolean) => void;
}

const useContactForm = ({ contact, onSave }: Props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>();
  const { status } = useSelector((state: RootState) => state);
  const handleSubmitForm = (data: Contact) => {
    dispatch(
      setContact({
        ...data,
        isFavorite: false,
      })
    );
    reset();
  };

  const handleUpdateForm = (data: Contact) => {
    dispatch(
      updateContact({
        ...contact,
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
      })
    );
    onSave(false);
  };

  const handleDeleteBtn = () => {
    dispatch(deleteContact(contact.id));
  };

  return {
    handleSaveBtn: contact ? handleUpdateForm : handleSubmitForm,
    register,
    errors,
    handleSubmit,
    status,
    handleDelete: handleDeleteBtn,
  };
};

export default useContactForm;
