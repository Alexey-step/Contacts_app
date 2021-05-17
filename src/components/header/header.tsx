import React from 'react';
import Search from '../search/search';

import './header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Search />
    </header>
  );
};

export default Header;
