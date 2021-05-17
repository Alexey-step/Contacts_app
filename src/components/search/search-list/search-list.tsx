import React from 'react';
import SearchItem from '../search-item/search-item';
import { Contact } from '../../../types';

import './search-list.scss';

interface Props {
  contacts: Contact[],
  onContactClick: (contact: Contact) => void,
}

const SearchList: React.FC<Props> = ({ contacts, onContactClick }) => {
  return (
    <ul className="search__list">
      {
        contacts.map(
          (contact) => (
            <SearchItem
              onContactClick={onContactClick}
              key={contact.id}
              contact={contact}
            />
          ),
        )
      }
    </ul>
  );
};

export default SearchList;
