import React from 'react';
import { Contact } from '../../../types';

import './search-item.scss';

interface Props {
  contact: Contact,
  onContactClick: (contact: Contact) => void,
}

const SearchItem: React.FC<Props> = ({ contact, onContactClick }) => {
  const handleItem = (item: Contact) => {
    onContactClick(item);
  };

  return (
    <li
      className="search__item"
      onClick={() => handleItem(contact)}
    >
      {contact.name}
    </li>
  );
};

export default SearchItem;
