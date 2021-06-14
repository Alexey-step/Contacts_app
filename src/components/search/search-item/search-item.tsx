import React from "react";
import { Contact } from "../../../types";

import "./search-item.scss";

interface Props {
  contact: Contact;
  onContactClick: (name: string) => void;
}

const SearchItem: React.FC<Props> = ({ contact, onContactClick }) => {
  return (
    <li
      data-testid="contact"
      className="search__item"
      onClick={() => onContactClick(contact.name)}
    >
      {contact.name}
    </li>
  );
};

export default React.memo(SearchItem);
