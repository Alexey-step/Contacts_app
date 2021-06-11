import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOption, setFilter } from "../../store/action-creators";
import { Option } from "../../const";
import { RootState } from "../../store/reducer";

import "./sort.scss";

interface Props {
  onSort?: (page: number) => void;
}

const Sort: React.FC<Props> = ({ onSort }) => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state: RootState) => state);
  const favoriteContacts = contacts.filter((contact) => contact.isFavorite);

  const handleOption = (option: string) => {
    dispatch(setOption(option));
    onSort(0);
    dispatch(setFilter(""));
  };

  return (
    <section className="sort">
      <button
        onClick={() => handleOption(Option.ALL_CONTACTS)}
        className="sort__btn"
        type="button"
      >{`All contacts (${contacts.length})`}</button>
      <button
        onClick={() => handleOption(Option.FAVORITES)}
        className="sort__btn"
        type="button"
      >{`Favorites (${favoriteContacts.length})`}</button>
    </section>
  );
};

export default React.memo(Sort);
