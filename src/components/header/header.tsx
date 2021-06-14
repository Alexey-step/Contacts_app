import React from "react";
import Search from "../search/search";

import "./header.scss";

interface Props {
  onOpen: (isOpen: boolean) => void;
}

const Header: React.FC<Props> = ({ onOpen }) => {
  const handleAddContactBtn = () => {
    onOpen(true);
  };

  return (
    <header className="header">
      <Search />
      <button
        data-testid="add-contact"
        onClick={handleAddContactBtn}
        className="header__btn"
        type="button"
      >
        Add contact
      </button>
    </header>
  );
};

export default React.memo(Header);
