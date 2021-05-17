import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setContact, updateContact } from '../../store/api/api-actions';
import { Contact } from '../../types';

import './form.scss';

interface Props {
  contact?: Contact,
  onSave?: (isSave: boolean) => void,
}

const Form: React.FC<Props> = ({ contact, onSave }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: contact ? contact.name : '',
    phone: contact ? contact.phone : '',
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(setContact({
      ...data,
      id: Date.now(),
    }));
    setData({
      name: '',
      phone: '',
    });
  };

  const handleUpdate = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(updateContact({
      ...contact,
      name: data.name,
      phone: data.phone,
    }));
    onSave(false);
  };

  return (
    <form
      className="form"
      action="#"
      method="post"
      onSubmit={contact ? handleUpdate : handleSubmit}
    >
      <label className="visually-hidden" htmlFor="name">Contact name</label>
      <input
        className="form__field"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={handleChange}
        value={data.name}
      />
      <label className="visually-hidden" htmlFor="phone">Phone number</label>
      <input
        className="form__field"
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone number"
        onChange={handleChange}
        value={data.phone}
      />
      <button className="form__btn" type="submit">Save contact</button>
    </form>
  );
};

export default Form;
