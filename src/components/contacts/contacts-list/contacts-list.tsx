import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import ContactsItem from '../contacts-item/contacts-item';
import { Contact } from '../../../types';

import './contacts-list.scss';

interface Props {
  contacts: Contact[],
}

const ContactsList: React.FC<Props> = ({ contacts }) => {
  const { activeContact } = useSelector((state: RootState) => state);

  return (
    <ul className="contacts__list">
      {
        activeContact ? <ContactsItem contact={activeContact} key={activeContact.id} />
          : contacts.map((contact) => {
            return <ContactsItem contact={contact} key={contact.id} />;
          })
      }
    </ul>
  );
};

export default ContactsList;
