import React from "react";
import ContactsList from "./contacts-list/contacts-list";
import { Contact } from "../../types";
import withSpinner from "../../hocs/with-spinner/with-spinner";
import Sort from "../sort/sort";

import "./contacts.scss";

interface Props {
  contacts: Contact[];
  onSort?: (page: number) => void;
}

const Contacts: React.FC<Props> = ({ contacts, onSort }) => {
  return (
    <section className="contacts">
      <h1 className="contacts__title">Contacts</h1>
      <Sort onSort={onSort} />
      <ContactsList contacts={contacts} />
    </section>
  );
};

export default React.memo(withSpinner(Contacts));
