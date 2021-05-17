import React from 'react';
import ContactsList from './contacts-list/contacts-list';
import { Contact } from '../../types';

import './contacts.scss';

interface Props {
  contacts: Contact[],
}

const Contacts: React.FC<Props> = ({ contacts }) => {
  return (
    <section className="contacts">
      <h1 className="contacts__title">Contacts</h1>
      <ContactsList contacts={contacts} />
    </section>
  );
};

export default Contacts;
