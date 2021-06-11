import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchList from "./search-list/search-list";
import SearchIcon from "../UI/icons/search-icon/search-icon";
import { RootState } from "../../store/reducer";
import { setFilter } from "../../store/action-creators";
import { getActiveContacts } from "../../store/selectors";

import "./search.scss";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { filter } = useSelector((state: RootState) => state);
  const contacts = useSelector(getActiveContacts);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(evt.target.value));
    if (contacts.length > 0) {
      setIsOpen(true);
    }
    if (!evt.target.value.length) {
      setIsOpen(false);
    }
  };

  const handleList = (name: string) => {
    setIsOpen(false);
    dispatch(setFilter(name));
  };

  return (
    <div className="search">
      <label className="visually-hidden" htmlFor="search">
        Search contact
      </label>
      <input
        className="search__field"
        type="text"
        id="search"
        placeholder="Search contact"
        value={filter}
        onChange={handleChange}
        autoComplete="off"
      />
      {isOpen && <SearchList onContactClick={handleList} contacts={contacts} />}
      <div className="search__icon">
        <SearchIcon />
      </div>
    </div>
  );
};

export default React.memo(Search);
