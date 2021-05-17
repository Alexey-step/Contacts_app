import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducer';
import SearchList from './search-list/search-list';
import { setActiveContact } from '../../store/action-creators';
import { Contact } from '../../types';

import './search.scss';

const Search: React.FC = () => {
  const [value, setValue] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  const dispatch = useDispatch();

  const { contacts } = useSelector((state: RootState) => state);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    if (evt.target.value.length) {
      const filteredContact = contacts.filter(
        (contact) => contact.name.toLowerCase().indexOf(evt.target.value.toLowerCase()) !== -1,
      );
      setFilteredContacts(filteredContact);
    }
  };

  const handleList = (item: Contact) => {
    setValue(item.name);
    dispatch(setActiveContact(item));
    setFilteredContacts([]);
  };

  const handleSearchBtn = () => {
    const activeContact = contacts.find(
      (contact) => contact.name === value,
    );
    dispatch(setActiveContact(activeContact));
    setFilteredContacts([]);
  };

  return (
    <div className="search">
      <label className="visually-hidden" htmlFor="search">Search contact</label>
      <input
        className="search__field"
        type="text"
        id="search"
        placeholder="Search contact"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
      {
        filteredContacts.length > 0
          && <SearchList onContactClick={handleList} contacts={filteredContacts} />
      }
      <button
        onClick={handleSearchBtn}
        className="search__btn"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
