import React from "react";
import ContactsItem from "../contacts-item/contacts-item";
import { Contact } from "../../../types";

import "./contacts-list.scss";

interface Props {
  contacts: Contact[];
}

const ContactsList: React.FC<Props> = ({ contacts }) => {
  if (!contacts.length) {
    return <h2>You dont have contacts yet</h2>;
  }

  return (
    <ul className="contacts__list">
      {contacts.map((contact: Contact) => {
        return <ContactsItem contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};

export default React.memo(ContactsList);
