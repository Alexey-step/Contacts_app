import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Contact } from "../../../types";
import { updateContact } from "../../../store/api/api-actions";
import Form from "../../form/form";
import EmailIcon from "../../UI/icons/email-icon/email-icon";
import PhoneIcon from "../../UI/icons/phone-icon/phone-icon";
import MarkerIcon from "../../UI/icons/marker-icon/marker-icon";
import EditIcon from "../../UI/icons/edit-icon/edit-icon";
import FavoriteIcon from "../../UI/icons/favorite-icon/favorite-icon";

import "./contacts__item.scss";

interface Props {
  contact: Contact;
}

const ContactsItem: React.FC<Props> = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { name, phone, email, address, isFavorite } = contact;

  const handleFavorite = (item: Contact) => {
    dispatch(
      updateContact({
        ...item,
        isFavorite: !item.isFavorite,
      })
    );
  };

  return (
    <li className="contacts__item contact">
      {isEdit ? (
        <Form isEdit={isEdit} contact={contact} onSave={setIsEdit} />
      ) : (
        <div className="contact__wrapper">
          <h3 className="contact__title">{name}</h3>
          <p className="contact__text">
            <PhoneIcon />
            <a className="contact__link" href={`tel:${phone}`}>
              {phone}
            </a>
          </p>
          {email && (
            <p className="contact__text">
              <EmailIcon />
              <a href={`mailto:${email}`} className="contact__link">
                {email}
              </a>
            </p>
          )}
          {address && (
            <p className="contact__text">
              <MarkerIcon />
              <span className="contact__description">{address}</span>
            </p>
          )}
          <div className="contact__btn-wrapper">
            <button
              onClick={() => setIsEdit(true)}
              className="contact__btn"
              type="button"
            >
              Edit
              <EditIcon />
            </button>
            <button
              onClick={() => handleFavorite(contact)}
              className="contact__btn"
              type="button"
            >
              Favorite
              <FavoriteIcon isFavorite={isFavorite} />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default React.memo(ContactsItem);
