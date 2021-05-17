import React from 'react';
import ContactsList from './contacts-list/contacts-list';

import './contacts.scss';

const Contacts: React.FC = () => {
  return (
    <section className="contacts">
      <h1 className="contacts__title">Contacts</h1>
      <ContactsList />
    </section>
  );
};

export default Contacts;
