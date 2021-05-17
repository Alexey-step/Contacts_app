import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Contact } from '../../../types';
import { deleteContact } from '../../../store/api/api-actions';
import Form from '../../form/form';

import './contacts__item.scss';

interface Props {
  contact: Contact
}

const ContactsItem: React.FC<Props> = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { name, phone, id } = contact;

  const handleDeleteBtn = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className="contacts__item contact">
      {
        isEdit ? <Form contact={contact} onSave={setIsEdit} />
          : (
            <div className="contact__wrapper">
              <h3 className="contact__title">{name}</h3>
              <p className="contact__text">
                phone:
                <a className="contact__phone" href={`tel:${phone}`}>{phone}</a>
              </p>
              <div className="contact__btn-wrapper">
                <button onClick={() => setIsEdit(true)} className="contact__btn" type="button">Edit</button>
                <button onClick={handleDeleteBtn} className="contact__btn" type="button">Delete</button>
              </div>
            </div>
          )
      }
    </li>
  );
};

export default ContactsItem;
