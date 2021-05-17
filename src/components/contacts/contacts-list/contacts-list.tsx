import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import ContactsItem from '../contacts-item/contacts-item';

import './contacts-list.scss';

const ContactsList: React.FC = () => {
  const { contacts, activeContact } = useSelector((state: RootState) => state);

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
